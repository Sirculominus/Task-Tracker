import React from 'react'
import BcTask from './BcTask'
import { ButtonMenu, MenuItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const BcTasks = ({ bcTasks, onComplete, loadingInTask, onFilter, filter }) => {
    

    return (
        <div>
            <div className='header'>
                <h3>Tasks from Blockchain</h3>
                <div>
                    <ButtonMenu
                        icon={<FontAwesomeIcon icon={faEllipsisV} />}
                    >    
                        <MenuItem 
                            onClick={onFilter} 
                            label={filter ? "Hide Completed" : "Show All"}
                        />
                        <Link to='/calendar'>
                            <MenuItem 
                                label="calendar"
                            />  
                        </Link>
                    </ButtonMenu> 
                </div>
            </div>
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




// style={{width:'13rem', height:'2.5rem'}}