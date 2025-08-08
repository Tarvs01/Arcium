import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Infrastructure from './Infrastructure';
import Applications from './Applications';
import DevFramework from './DevFramework';
import Tokenomics from './Tokenomics';
import General from './General';

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

  function nextSection(score: number){
    setTotalScore(totalScore + score);

    if(categoryIndex + 1  === categoryOrder.length){
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
  
  return (
    <div className='main'>
      {welcomePageShown && <div className="welcome">
        <h2>WELCOME TO ARCIUM QUESTIONAIRE</h2>
        <p>Choose which of these categories you want to test on. You can choose multiple</p>
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
        <p>You scored {totalScore}/{categoryOrder.length * 10}</p>      
      </div>}
    </div>
  )
}

export default App
