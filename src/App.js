import { useState } from 'react';
import NewsCard from './NewsCard';
import './App.css';

const App = () => {

  const getNewsFromStorage = () => { return JSON.parse(localStorage.getItem("news")); }
  const getNextCardsFromStorage = () => { return JSON.parse(localStorage.getItem("nextCards")); }
  const setNewsInStorage = (newsArray) => { localStorage.setItem("news", JSON.stringify(newsArray)); }
  const setNextCardsInStorage = (nextCards) => { localStorage.setItem("nextCards", JSON.stringify(nextCards)); }

  const [nextCards, setNextCards] = useState(getNextCardsFromStorage);

  const revealCard = (index) => {
    const nextCards = getNextCardsFromStorage();
    let updatedCard = { number: nextCards[index].number, revealed: true };
    let newCards = [ ...nextCards.slice(0, index), updatedCard, ...nextCards.slice(index + 1) ];

    setNextCards(newCards);
    setNextCardsInStorage(newCards);
  }

  const nextCardsByNews = (randomisedNews) => {
    return ([
      { number: randomisedNews[0], revealed: false },
      { number: randomisedNews[1], revealed: false },
      { number: randomisedNews[2], revealed: false }
    ])
  }

  const randomiseNews = () => {
    const newsArray = [];
    for (let i = 0; i < 90; i++) {
      newsArray.push(i + 1);
    }
    const randomisedNews = shuffleArray(newsArray);
    const nextCards = nextCardsByNews(randomisedNews);
    
    setNewsInStorage(randomisedNews);
    setNextCards(nextCards);
    setNextCardsInStorage(nextCards);
  }

  const nextNews = () => {
    const news = getNewsFromStorage();
    
    for (let i = 0; i < 3; i++) {
      news.shift();
    }

    const nextCards = nextCardsByNews(news);

    setNewsInStorage(news);
    setNextCards(nextCards);
    setNextCardsInStorage(nextCards);
  }
  
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  if (localStorage.getItem('news') === null) {
    return (
      <div className="App">
        <div className="App-header"/>
        <div className="Shuffle-button-container">
          <button className="Shuffle-button" onClick={() => randomiseNews()}>Shuffle</button>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <div className="App-header"/>
        <div className="Cards-container">
          <div/>
          <NewsCard card={nextCards[0]} cardIndex={0} revealCard={revealCard}/>
          <NewsCard card={nextCards[1]} cardIndex={1} revealCard={revealCard}/>
          <NewsCard card={nextCards[2]} cardIndex={2} revealCard={revealCard}/>
        </div>
        <div className="Next-news-container">
          <button className="Next-news-button" onClick={() => nextNews()}>Next News</button>
        </div>
        <div className="Shuffle-button-container">
          <button className="Shuffle-button" onClick={() => randomiseNews()}>Shuffle</button>
        </div>
      </div>
    );
  }
}

export default App;
