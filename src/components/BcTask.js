const BcTask = ({ bcTask }) => {

    return (
        <div >
            <div className={`task ${bcTask.reminder ? 'reminder' : ''}`}>
                <h3>
                    {bcTask.name} 
                </h3>
                <p>{bcTask.date}</p>
                <p>{bcTask.description}</p>
            </div>
        </div>

    )
}

export default BcTask