import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr'
import ClipLoader from "react-spinners/ClipLoader";

const BcTask = ({ bcTask, onComplete, loadingInTask }) => {

    return (
        <div >
            <div className={`task ${bcTask.reminder ? 'reminder' : ''}`}>
                <h3>
                    {bcTask.name} {bcTask.done ? <GrCheckboxSelected className={bcTask.done ? 'task-completed' : 'task-not-completed'} onClick={() => onComplete(bcTask.id)} /> : <GrCheckbox className={bcTask.done ? 'task-completed' : 'task-not-completed'} onClick={() => onComplete(bcTask.id)} />}
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