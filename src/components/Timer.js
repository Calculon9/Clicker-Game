

const Timer = ({timer}) => {
    return (
        <div className="timer" onChange={timer.seconds <= 0 ? () => timer.seconds = 0:null}>{`${timer.seconds} : ${timer.mSeconds}`}</div>
    )
}

export default Timer