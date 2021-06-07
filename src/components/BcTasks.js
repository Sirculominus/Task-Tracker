import BcTask from './BcTask'

const BcTasks = ({ bcTasks, onComplete, loadingInTask }) => {
    

    return (
        <div>
            <h2>From Blockchain</h2>
            {bcTasks.map((bcTask) => (
            <BcTask key={bcTask.id} bcTask={bcTask} onComplete={onComplete} loadingInTask={loadingInTask} />
            ))}
        </div>
    )
}

export default BcTasks
