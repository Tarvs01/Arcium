import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Infrastructure from './Infrastructure';
import Applications from './Applications';
import DevFramework from './DevFramework';
import Tokenomics from './Tokenomics';
import General from './General';
import WelcomeText from './Welcome';
import QuizText from './Quiz';

type categoriesType = "infrastructure" | "developer_framework" | "tokenomics" | "applications" | "general";

function App() {
  const [totalScore, setTotalScore] = useState(0);
  const [initialMessage, setInitialMessage] = useState("Starting with the first section");
  const [categoriesSelected, setCategoriesSelected] = useState<{[index: string]: boolean}>({
    infrastructure: false,
    developer_framework: false,
    tokenomics: false,
    applications: false,
    general: false
  });
  const [showButton, setShowButton] = useState(false);
  const [categoryOrder, setCategoryOrder] = useState<string[]>([]);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("");
  const [scorePageShown, setScorePageShown] = useState(false);
  const [welcomePageShown, setWelcomePageShown] = useState(true);
  const [cateChoosePageShown, setCateChoosePageShown] = useState(false);
  const [scorePercent, setScorePercent] = useState(0);

  function nextSection(score: number){
    let tempTotalScore = totalScore + score;
    setTotalScore(totalScore + score);

    if(categoryIndex + 1  === categoryOrder.length){
      setScorePercent((tempTotalScore/(categoryOrder.length * 10)) * 100);
      console.log("total score is", tempTotalScore);
      console.log((tempTotalScore/(categoryOrder.length * 10)) * 100);
      setCurrentCategory("");
      setScorePageShown(true);
      return;
    }
    
    setCurrentCategory(categoryOrder[categoryIndex + 1]);
    setCategoryIndex(categoryIndex + 1);
    setInitialMessage("Moving to the next category")
  }

  function compileCategoryOrder(){
    let cate = Object.keys(categoriesSelected).filter((a) => categoriesSelected[a] === true);
    setCategoryOrder(cate);
    setCurrentCategory(cate[0]);
    setWelcomePageShown(false);
    setCateChoosePageShown(false);
  }

  function setSelectedOptions(option: categoriesType){
    setShowButton(true)
    let filt = Object.values(categoriesSelected).filter((a) => a === true);
    if(filt.length === 1 && categoriesSelected[option] === true){
      return;
    }
    
    let tempCategories = {...categoriesSelected};
    tempCategories[option] = !tempCategories[option];
    setCategoriesSelected(tempCategories);
  }

  function reset(){
    setTotalScore(0);
    setInitialMessage("Starting with the first section");
    setCategoriesSelected({
      infrastructure: false,
      developer_framework: false,
      tokenomics: false,
      applications: false,
      general: false
    });
    setShowButton(false);
    setCategoryOrder([]);
    setCategoryIndex(0);
    setCurrentCategory("");
    setScorePageShown(false);
    setWelcomePageShown(false);
    setCateChoosePageShown(true);
  }
  
  return (
    <div className='main'>
      {/* <div className='svg-cont'>
        <img src='../general/arcium_primary.svg' />
      </div> */}

      {welcomePageShown && <div className='welcome'>
        <div className="welcome-text-cont">
          <WelcomeText />
        </div>
        <div className='arcium-img-cont'>
          <img src="../general/arcium_light.svg" alt="" />
        </div>
        <div className="quiz-text-cont">
          <QuizText />
        </div>

        <button onClick={() => {setWelcomePageShown(false); setCateChoosePageShown(true)}}>Proceed</button>
      </div>}

      {cateChoosePageShown && <div className="cate-choose">
        <h2>Choose which of these categories you want to test on. You can choose multiple</h2>
        <ul className='categories-list'>
          <li onClick={() => setSelectedOptions("infrastructure")} className={categoriesSelected.infrastructure ? "selected-option" : ""}>Infrastructure</li>
          <li onClick={() => setSelectedOptions("developer_framework")} className={categoriesSelected.developer_framework ? "selected-option" : ""}>Dev Framework</li>
          <li onClick={() => setSelectedOptions("tokenomics")} className={categoriesSelected.tokenomics ? "selected-option" : ""}>Tokenomics</li>
          <li onClick={() => setSelectedOptions("applications")} className={categoriesSelected.applications ? "selected-option" : ""}>Applications</li>
          <li onClick={() => setSelectedOptions("general")} className={categoriesSelected.general ? "selected-option" : ""}>General</li>
        </ul>

        {showButton && <button onClick={compileCategoryOrder}>Proceed</button>}
      </div>}

      {currentCategory === "infrastructure" && <Infrastructure nextSection={nextSection} initialMessage={initialMessage} />}
      {currentCategory === "applications" && <Applications nextSection={nextSection} initialMessage={initialMessage} />}
      {currentCategory === "developer_framework" && <DevFramework nextSection={nextSection} initialMessage={initialMessage} />}
      {currentCategory === "tokenomics" && <Tokenomics nextSection={nextSection} initialMessage={initialMessage} />}
      {currentCategory === "general" && <General nextSection={nextSection} initialMessage={initialMessage} />}


      {scorePageShown && <div className='score-cont'>
        <div className='main-score-cont'>
        <h2>You scored {totalScore}/{categoryOrder.length * 10}</h2>
        {(scorePercent < 25) && <div>
          <img src="../pictures/angry.png" alt="angry pic" />
        </div>}
        {(scorePercent >= 25 && scorePercent < 50) && <div>
          <img src="../pictures/sad.png" alt="sad pic" />
        </div>} 
        {(scorePercent >= 50 && scorePercent < 75) && <div>
          <img src="../pictures/happy.png" alt="happy pic" />
        </div>}
        {(scorePercent >= 75) && <div>
          <img src="../pictures/enthusiastic.png" alt="enthusiastic pic" />
        </div>}
        <button onClick={reset}>Retake the test</button>
        </div>

        <div className='score-links-cont'>
          <h2>Check out Arciums socials to learn more about the project</h2>
          <ul>
            <li>
              <a href="https://www.arcium.com/">Website</a>
            </li>
            <li>
              <a href="https://x.com/ArciumHQ">Twitter/X</a>
            </li>
            <li>
              <a href="https://discord.com/invite/arcium">Discord</a>
            </li>
            <li>
              <a href="https://docs.arcium.com/developers">Dev documentation</a>
            </li>
            <li>
              <a href="https://github.com/arcium-hq">Github</a>
            </li>
          </ul>
        </div>
      </div>}
    </div>
  )
}

export default App


//#6646f3