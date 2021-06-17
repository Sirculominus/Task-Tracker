import PropTypes from 'prop-types'
//import { Button } from './Button'
import { Button, ButtonMenu, MenuItem, MenuDivider } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Header = ({title, onAdd, showAdd, onSyncBC, loading, onFilter, filter}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
                variant={showAdd ? 'destructive' : 'success'} 
                label={showAdd ? 'Close' : 'Add'} 
                onClick={onAdd}/>
            <Button 
                isLoading={loading}
                variant={'brand'} 
                label={'Sync BC'} 
                onClick={onSyncBC}/>
            <ButtonMenu
                icon={<FontAwesomeIcon icon={faEllipsisV} />}
            >    
                <MenuItem 
                    onClick={onFilter} 
                    label={filter ? "Hide Completed" : "Show All"}
                />
                <MenuDivider variant="space" />
                <Link to='/'>
                    <MenuItem 
                        label="List view"
                    />  
                </Link>
                <Link to='/calendar'>
                    <MenuItem 
                        label="Calendar view"
                    />  
                </Link>
            </ButtonMenu> 
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header
