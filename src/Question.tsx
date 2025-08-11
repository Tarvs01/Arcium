import { useState } from 'react'
import type { questionType } from './types';



function Question({questions, nextSection}: {questions:questionType[], nextSection: (score: number) => void}) {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [firstClick, setFirstClick] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  function nextQuestion(){
    if(currentIndex == questions.length - 1){
      nextSection(totalScore);
    }
    else{
      setCurrentQuestion(questions[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    }
  }

  function buttonClick(){
    if(firstClick === true){
      setFirstClick(false);
      setShowAnswer(true);
    }
    else{
      setFirstClick(true);
      setShowAnswer(false);
      if(selectedAnswer === currentQuestion.answer){
        nextQuestion();
        setTotalScore(totalScore + 1);
      }
      else{
        nextQuestion();
      }
      setSelectedAnswer("");
    }
  }

  function setAnswer(option: string){
    if(!showAnswer){
      setSelectedAnswer(option);
    }
  }

  return (
    <div className='question-cont'>
      <p>{currentQuestion.question}</p>
      <ul>
        <li onClick={() => setAnswer("a")} className={selectedAnswer === "a" ? "selected-option" : ""}><span>{currentQuestion.options.a}</span></li>
        <li onClick={() => setAnswer("b")} className={selectedAnswer === "b" ? "selected-option" : ""}><span>{currentQuestion.options.b}</span></li>
        <li onClick={() => setAnswer("c")} className={selectedAnswer === "c" ? "selected-option" : ""}><span>{currentQuestion.options.c}</span></li>
        <li onClick={() => setAnswer("d")} className={selectedAnswer === "d" ? "selected-option" : ""}><span>{currentQuestion.options.d}</span></li>
      </ul>

      {selectedAnswer !== "" && <div className='answer-button'>
        <button onClick={buttonClick}>Next</button>
      </div>}

      {showAnswer && <div className="answer-cont">
        {selectedAnswer === currentQuestion.answer && <div className='answer-main'>
          <div><img src="../pictures/happy.png" alt="" /></div> 
          <p>You got it right!</p> 
        </div>}
        {selectedAnswer !== currentQuestion.answer && <div className='answer-main'>
          <div><img src="../pictures/sad.png" alt="" /></div>
          <p>Incorrect. The answer is {currentQuestion.options[currentQuestion.answer]}</p>
        </div>}
      </div>}
    </div>
  )
}

export default Question