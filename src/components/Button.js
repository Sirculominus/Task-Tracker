import PropTypes from 'prop-types'


const Button = ({ color, text, onClick }) => {

    return <button onClick={onClick} style={{ backgroundColor: color }} className='btn buttonHeader'>{text}</button>
}

const WideButton = ({ color, text, onClick }) => {

    return <button onClick={onClick} style={{ backgroundColor: color }} className='btn wideButton'>{text}</button>
}

Button.defaultProps = {
    color: 'steelblue',
}

WideButton.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

WideButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export { Button, WideButton}
