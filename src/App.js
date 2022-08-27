import { useState } from 'react';
import NewsCard from './NewsCard';
import './App.css';

const App = () => {

  const [nextCards, setNextCards] = useState([
    { number: 0, revealed: false },
    { number: 1, revealed: false },
    { number: 2, revealed: false }
  ]);
  
  const revealCard = (index) => {
    const nextCards = JSON.parse(localStorage.getItem("nextCards"));
    let updatedCard = { number: nextCards[index].number, revealed: true };
    let newCards = [ ...nextCards.slice(0, index), updatedCard, ...nextCards.slice(index + 1) ];
    console.log(newCards)
    setNextCards(newCards);
    localStorage.setItem("nextCards", JSON.stringify(newCards));
  }

  const randomiseNews = () => {
    const newsArray = [];
    for (let i = 0; i < 90; i++) {
      newsArray.push(i + 1);
    }
    const randomisedNews = shuffleArray(newsArray);
    const nextCards = [
      { number: randomisedNews[0], revealed: false },
      { number: randomisedNews[1], revealed: false },
      { number: randomisedNews[2], revealed: false }
    ]
    
    localStorage.setItem("news", JSON.stringify(randomisedNews));
    localStorage.setItem("nextCards", JSON.stringify(nextCards));
    setNextCards(nextCards);
  }
  
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  console.log(nextCards)
  return (
    <div className="App">
      <div className="App-header"/>
      <div className="Cards-container">
        <NewsCard card={nextCards[0]} cardIndex={0} revealCard={revealCard}/>
        <NewsCard card={nextCards[1]} cardIndex={1} revealCard={revealCard}/>
        <NewsCard card={nextCards[2]} cardIndex={2} revealCard={revealCard}/>
      </div>
      <button onClick={() => randomiseNews()}>Randomise News</button>
    </div>
  );
}

export default App;
