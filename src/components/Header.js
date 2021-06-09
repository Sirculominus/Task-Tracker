import PropTypes from 'prop-types'
//import { Button } from './Button'
import { Button } from 'react-rainbow-components';

const Header = ({title, onAdd, showAdd, onSyncBC, loading}) => {

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
