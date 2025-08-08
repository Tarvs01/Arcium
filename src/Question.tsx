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
  return (
    <div className='question-cont'>
      <p>{currentQuestion.question}</p>
      <ul>
        <li onClick={() => setSelectedAnswer("a")} className={selectedAnswer === "a" ? "selected-option" : ""}><span>{currentQuestion.options.a}</span></li>
        <li onClick={() => setSelectedAnswer("b")} className={selectedAnswer === "b" ? "selected-option" : ""}><span>{currentQuestion.options.b}</span></li>
        <li onClick={() => setSelectedAnswer("c")} className={selectedAnswer === "c" ? "selected-option" : ""}><span>{currentQuestion.options.c}</span></li>
        <li onClick={() => setSelectedAnswer("d")} className={selectedAnswer === "d" ? "selected-option" : ""}><span>{currentQuestion.options.d}</span></li>
      </ul>

      {showAnswer && <div className="answer-cont">
        {selectedAnswer === currentQuestion.answer && <div className='answer-main'>
          <img src="../pictures/happy.png" alt="" /> 
          <p>You got it right!</p> 
        </div>}
        {selectedAnswer !== currentQuestion.answer && <div className='answer-main'>
          <img src="../pictures/sad.png" alt="" />
          <p>Incorrect. The answer is {currentQuestion.options[currentQuestion.answer]}</p>
        </div>}
      </div>}

      {selectedAnswer !== "" && <div>
        <button onClick={buttonClick}>Next</button>
      </div>}
    </div>
  )
}

export default Question