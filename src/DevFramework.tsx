import { useState } from 'react';
import Question from './Question'
import { developer_framework } from './fullQuestionBank'
import type { questionType } from './types'

function DevFramework({nextSection, initialMessage}: {nextSection: (score: number) => void, initialMessage: string}) {
    const [isStart, setIsStart] = useState(true);
    
    let questions: questionType[] = [];
    let devCopy = [...developer_framework];

    function getRandomQuestions(){
        let questionsLength = devCopy.length;

        for(let i = 0; i < 10; i++){
            let random = Math.floor(Math.random() * questionsLength);
            questions.push(devCopy.splice(random,1)[0]);
            questionsLength = questionsLength - 1;
        }
    }

    getRandomQuestions();
  return (
    <div className='section'>
        {isStart && <div className='section-start'>
            <p>{initialMessage}: Developer Framework</p>
            <button onClick={() => setIsStart(!isStart)}>Proceed</button>
        </div>}

        {!isStart && <div>
            <Question questions={questions} nextSection={nextSection} />
        </div>}
    </div>
  )
}

export default DevFramework