import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import ClipLoader from "react-spinners/ClipLoader";
import ReactTooltip from 'react-tooltip';
import { Card } from 'react-rainbow-components'

const BcTask = ({ bcTask, onComplete, loadingInTask }) => {

    return (
        <div style={{padding: '0 0 1rem'}}>
            <Card
                title={
                    <div>
                        {bcTask.name}
                        <div style={{width:'14px', position:'absolute', left:'90%',top:'10%' }}>
                            {bcTask.done ? <ImCheckboxChecked data-tip="Task is done" className={'task-completed'} /> : <ImCheckboxUnchecked data-tip="Mark as done" className={'task-not-completed'} onClick={() => { if (window.confirm('Marking the task as done is not reversible.\nOnly confirm if you really are done with your task!')) onComplete(bcTask.id)}} />}
                            <ReactTooltip />
                        </div>
                    </div>
                }
                footer={
                    <div>
                        <p>
                            {bcTask.date} { loadingInTask[bcTask.id] && <ClipLoader  loading={loadingInTask}  />}
                        </p>
                        <p>{bcTask.description}</p>
                    </div>
                }
            />
        </div>

    )
}

export default BcTask