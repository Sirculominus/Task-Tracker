import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import ClipLoader from "react-spinners/ClipLoader";
import ReactTooltip from 'react-tooltip';

const BcTask = ({ bcTask, onComplete, loadingInTask }) => {

    return (
        <div >
            <div className={`task ${bcTask.reminder ? 'reminder' : ''}`}>
                <h3>
                    {bcTask.name} {bcTask.done ? <ImCheckboxChecked data-tip="Task is done" className={'task-completed'} /> : <ImCheckboxUnchecked data-tip="Mark as done" className={'task-not-completed'} onClick={() => { if (window.confirm('Marking the task as done is not reversible.\nOnly confirm if you really are done with your task!')) onComplete(bcTask.id)}} />}
                <ReactTooltip />
                </h3>
                <p>
                    {bcTask.date} { loadingInTask[bcTask.id] && <ClipLoader  loading={loadingInTask}  />}
                </p>
                <p>{bcTask.description}</p>
            </div>
        </div>

    )
}

export default BcTask