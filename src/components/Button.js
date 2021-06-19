
const Button = ({handlerOne, handlerTwo, timer}) => {
    
    return (
        <button className='btn' onClick={timer.time <= 0 ? handlerTwo: handlerOne}>{timer.time <= 0 ? "RESET":"CLICK ME"}</button>
    )
}

export default Button