import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { ethers } from "ethers"
import detectEthereumProvider from '@metamask/detect-provider'
import Tasksabi from './abis/Tasks.json'
import BcTasks from './components/BcTasks'
import ClipLoader from "react-spinners/ClipLoader";


const App = () => {

  // For loading spinner
  let [loading, setLoading] = useState(false);
  let [loadingInTask, setLoadingInTask] = useState([]);

  // Initate 
  useEffect(() => {
    loadBlockchainData()
  }, [])

  
  const loadBlockchainData = async () => {
    const provider = await detectEthereumProvider();
    if(provider){
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const address = await window.ethereum.request({ method: 'eth_requestAccounts'})
      const netIdHex = await window.ethereum.request({ method: 'eth_chainId'})
      const netId = parseInt(netIdHex,16)

      // Load balance
      //check if account is detected, then load balance&setStates, elsepush alert
      if(typeof address[0] != 'undefined'){
        const balance = await provider.getBalance(address[0])
        setProps({ account: address[0], balance: balance, web3: provider})
      } else {
        window.alert('Please login with Metamask')
      }

      try {
        const tasks = new ethers.Contract(Tasksabi.networks[netId].address, Tasksabi.abi, signer)
        const tasksAddress = Tasksabi.networks[netId].address
        setProps({tasks: tasks, tasksAddress: tasksAddress})
      } catch (e) {
        console.log('Error', e)
        window.alert('Contracts not deployed to the current network')
      }

    } else {
      window.alert('Please install Metamask')
    }
  }

  const [web3props, setProps] = useState({
    web3: 'undefined',
    account: '',
    tasks: null,
    balance: 0,
    tasksAddress: null
  })
  


  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  const [bcTasks, setBcTasks] = useState([])
  const [filter, toggleFilter] = useState(true)
  

  // Add Task
  const addTask = async (task) => {
    const id = tasks.length + 1
    const newTask = { id, ...task}
    setTasks([...tasks,newTask])
      try {
        console.log(web3props.tasks)
        console.log(task)
        await web3props.tasks.addTask(task.text,task.date,task.reminder,task.description)
        setShowAddTask(false)
        setLoading(true)
        await web3props.tasks.on("addTaskEvent", () => {
          console.log("Got the event")
          syncBC()
        })
      } catch (e) {
        console.log('Error, add Task: ', e)
      }
  }



  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  // Sync BC
  const syncBC = async () => {
    try {
      setLoading(true)
      const totalTasks = await web3props.tasks.getTasksAmount()
      var tasksFromBc = []
      var allTasks = []
      for (let i = 1; i <= totalTasks.toNumber(); i++) {
        tasksFromBc[i] = await web3props.tasks.getTask(i);
        allTasks.push({
          id: i, 
          name: tasksFromBc[i].name, 
          date: tasksFromBc[i].date,
          reminder: tasksFromBc[i].reminder,
          description: tasksFromBc[i].description,
          done: tasksFromBc[i].done
         })
      }
      setBcTasks([...allTasks])
      setLoading(false)
      console.table(bcTasks)
    } catch (e) {
      console.log('Error, ', e)
    }
  }

  const completeBcTask = async (id) => {
    console.log('Delete BC task id: ', id)
    await web3props.tasks.completeTask(id)
    let loading = []
    loading[id] = true
    setLoadingInTask(loading)
    await web3props.tasks.on("completeTaskEvent", () => {
      console.log("Got the event")
      syncBC()
      loading[id] = false
      setLoadingInTask(loading)
    })
  }
  
  return (
      <div>
        <div className="container">
          <Header loading={loading} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} onSyncBC = {() => syncBC()} />
          {showAddTask && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Local Tasks To Show'}
        </div>
        <div className="container">
          {bcTasks.length > 0 ? <BcTasks filter={filter} onFilter={() => {toggleFilter(!filter)}} bcTasks={bcTasks} onComplete={completeBcTask} loadingInTask={loadingInTask}/> : 'No Blockchain Tasks To Show'}
        </div>
      </div>
  )
}

export default App