

const Score = (props) => {

    return (
        <div className="score" >
            <h3>Score:<span>{` ${props.score}`}</span></h3>
        </div>
    )
}

export default Score