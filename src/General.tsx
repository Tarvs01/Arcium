import { useState } from 'react';
import Question from './Question'
import { general } from './fullQuestionBank'
import type { questionType } from './types'

function General({nextSection, initialMessage}: {nextSection: (score: number) => void, initialMessage: string}) {
    const [isStart, setIsStart] = useState(true);
    
    let questions: questionType[] = [];
    let generalCopy = [...general];

    function getRandomQuestions(){
        let questionsLength = generalCopy.length;

        for(let i = 0; i < 10; i++){
            let random = Math.floor(Math.random() * questionsLength);
            questions.push(generalCopy.splice(random,1)[0]);
            questionsLength = questionsLength - 1;
        }
    }

    getRandomQuestions();

  return (
    <div className='section'>
        {isStart && <div className='section-start'>
            <p>{initialMessage}: Infrastructure</p>
            <button onClick={() => setIsStart(!isStart)}>Proceed</button>
        </div>}

        {!isStart && <div>
            <Question questions={questions} nextSection={nextSection} />
        </div>}
    </div>
  )
}

export default General