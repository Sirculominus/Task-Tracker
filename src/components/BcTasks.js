import BcTask from './BcTask'
import { Button } from 'react-rainbow-components';

const BcTasks = ({ bcTasks, onComplete, loadingInTask, onFilter, filter }) => {
    

    return (
        <div>
            <header className="header">
                <h2>From Blockchain</h2>
                <Button 
                    onClick={onFilter} 
                    label={filter ? "Hide Completed" : "Show All"}
                    style={{width:'13rem', height:'2.5rem'}}/>
            </header>
            {filter ?
            bcTasks.map((bcTask) => ( 
            <BcTask key={bcTask.id} bcTask={bcTask} onComplete={onComplete} loadingInTask={loadingInTask} />
            )) : 
            bcTasks.map((bcTask) => ( !bcTask.done &&
                <BcTask key={bcTask.id} bcTask={bcTask} onComplete={onComplete} loadingInTask={loadingInTask} />
                ))}
        </div>
    )
}

export default BcTasks
