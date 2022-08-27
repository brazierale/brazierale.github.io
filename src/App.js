import { useState } from 'react';
import NewsCard from './NewsCard';
import './App.css';

function App() {
  const [nextCard, setNextCard] = useState({ number: 12, revealed: false})

  const revealCard = () => {
    const nextCard = JSON.parse(localStorage.getItem("nextCard"));
    setNextCard({ ...nextCard, revealed: true });
    localStorage.setItem("nextCard", JSON.stringify({ ...nextCard, revealed: true }));
  }

  const randomiseNews = () => {
    const newsArray = [];
    for (let i = 0; i < 90; i++) {
      newsArray.push(i + 1);
    }
    const randomisedNews = shuffleArray(newsArray);
    localStorage.setItem("news", JSON.stringify(randomisedNews));
    localStorage.setItem("nextCard", JSON.stringify({number: randomisedNews[0], revealed: false}));
  }
  
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div className="App">
      <div className="App-header"/>
      <NewsCard card={nextCard} revealCard={revealCard}/>
      <button onClick={() => randomiseNews()}>Randomise News</button>
      <button onClick={() => revealCard()}>Reveal Card</button>
    </div>
  );
}

export default App;
