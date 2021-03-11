import React, {useState, useEffect} from 'react';
import './assets/style.css';
import quizService from './quizService';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';

function App() {
    const [questionBank,setQuestionBank] = useState([]);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(0);

    const getQuestion =()=> {
       quizService().then(question => {
        setQuestionBank(question)
       })
    }

    useEffect(() => {
        getQuestion();
    }, []);
    
    const computeAnswer = (answer, correct) => {
        if(answer === correct) {
            setScore(score+1);
        };
        isFinished < 5 ? setIsFinished(isFinished + 1) : setIsFinished(5);
    }

    const playAgain = () => {
        setScore(0);
        setIsFinished(0);
        getQuestion();
    }
  
    return (
        <>
            <div className="container">
                <div className="title">Quizzzz</div>
                { (questionBank.length > 0) && isFinished < 5 && questionBank.map(question => (
                    <QuestionBox 
                    question={question.question}
                    options={question.answers} 
                    key={question.questionId}
                    selected={answer => {computeAnswer(answer, question.correct)}}/> 
                ))}                 
                {isFinished === 5 ? <Result score={score} playAgain={playAgain}/>: null}
            </div>
        </>
    )
}

export default App
