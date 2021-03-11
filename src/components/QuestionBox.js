import React, { useState } from 'react'

function QuestionBox({ question, options, selected }) {
    const [answers, setAnswers] = useState(options);
    const handleClick = (ans) => {
        setAnswers([ans]);
        selected(ans);
    }
    return (
        <div className="questionBox">
            <div className="question">{question}</div>
            {answers.map((ans, index) => (
                <button key={index} className="answerBtn" 
                onClick={() => { handleClick(ans)}}>
                    {ans}
                </button>
            )
            )}
        </div>
    )
}

export default QuestionBox
