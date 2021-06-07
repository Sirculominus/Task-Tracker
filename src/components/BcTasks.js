import BcTask from './BcTask'

const BcTasks = ({ bcTasks }) => {
    

    return (
        <div>
            <h2>From Blockchain</h2>
            {bcTasks.map((bcTask) => (
            <BcTask key={bcTask.id} bcTask={bcTask}/>
            ))}
        </div>
    )
}

export default BcTasks
