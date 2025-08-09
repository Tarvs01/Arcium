import { useState } from 'react';
import Question from './Question'
import { applications } from './fullQuestionBank'
import type { questionType } from './types'

function Applications({nextSection, initialMessage}: {nextSection: (score: number) => void, initialMessage: string}) {
    const [isStart, setIsStart] = useState(true);
    
    let questions: questionType[] = [];
    let applicationCopy = [...applications];

    function getRandomQuestions(){
        let questionsLength = applicationCopy.length;

        for(let i = 0; i < 10; i++){
            let random = Math.floor(Math.random() * questionsLength);
            questions.push(applicationCopy.splice(random,1)[0]);
            questionsLength = questionsLength - 1;
        }
    }

    getRandomQuestions();
  return (
    <div className='section'>
        {isStart && <div className='section-start'>
            <p>{initialMessage}: Applications</p>
            <button onClick={() => setIsStart(!isStart)}>Proceed</button>
        </div>}

        {!isStart && <div>
            <Question questions={questions} nextSection={nextSection} />
        </div>}
    </div>
  )
}

export default Applications