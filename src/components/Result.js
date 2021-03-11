import React from 'react'

const Result = ({score, playAgain}) => {
    return (
        <div className="score-board">
            <div className="score">You get {score} /5 correct answers!</div>
            <button className="playBtn"onClick={playAgain}>Play again</button>
        </div>
    )
}

export default Result
