import { useState } from 'react';
import './App.css';
import Calculator from './Calculator';
import NewsCard, { News } from './NewsCard';

const App = () => {
  const getNewsFromStorage = () => {
    const news = localStorage.getItem('news');
    if (news !== null) {
      return JSON.parse(news);
    } else {
      return null;
    }
  };
  const getNextCardsFromStorage = () => {
    const nextCards = localStorage.getItem('nextCards');
    if (nextCards !== null) {
      return JSON.parse(nextCards);
    } else {
      return null;
    }
  };
  const setNewsInStorage = (newsArray: number[]) => {
    localStorage.setItem('news', JSON.stringify(newsArray));
  };
  const setNextCardsInStorage = (nextCards: News[]) => {
    localStorage.setItem('nextCards', JSON.stringify(nextCards));
  };

  const getViewFromStorage = () => {
    const view = localStorage.getItem('view');

    return view;
  };
  const setViewInStorage = (viewType: string) => {
    localStorage.setItem('view', viewType);
  };
  const [view, setView] = useState(getViewFromStorage());

  const [nextCards, setNextCards] = useState(getNextCardsFromStorage);

  const revealCard = (index: number) => {
    const nextCards = getNextCardsFromStorage();
    let updatedCard = { number: nextCards[index].number, revealed: true };
    let newCards = [
      ...nextCards.slice(0, index),
      updatedCard,
      ...nextCards.slice(index + 1),
    ];

    setNextCards(newCards);
    setNextCardsInStorage(newCards);
  };

  const nextCardsByNews = (randomisedNews: number[]) => {
    return [
      { number: randomisedNews[0], revealed: false },
      { number: randomisedNews[1], revealed: false },
      { number: randomisedNews[2], revealed: false },
    ];
  };

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
  };

  const nextNews = () => {
    const news = getNewsFromStorage();

    for (let i = 0; i < 3; i++) {
      news.shift();
    }

    const nextCards = nextCardsByNews(news);

    setNewsInStorage(news);
    setNextCards(nextCards);
    setNextCardsInStorage(nextCards);
  };

  const shuffleArray = (array: number[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const Switch = () => {
    return (
      <div className='Switch-container'>
        <button
          className='News'
          onClick={() => {
            setView('news');
            setViewInStorage('news');
          }}
        >
          News
        </button>
        <button
          className='Calculator'
          onClick={() => {
            setView('calculator');
            setViewInStorage('calculator');
          }}
        >
          Calculator
        </button>
      </div>
    );
  };

  if (view === 'calculator') {
    return (
      <div className='App'>
        <div className='App-header' />
        <Switch />
        <Calculator />
      </div>
    );
  } else if (
    getNewsFromStorage() === null ||
    getNewsFromStorage().length === 0
  ) {
    return (
      <div className='App'>
        <div className='App-header' />
        <Switch />
        <div className='Shuffle-button-container'>
          <button className='Shuffle-button' onClick={() => randomiseNews()}>
            Shuffle
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className='App'>
        <div className='App-header' />
        <Switch />
        <div className='Cards-container'>
          <div />
          <NewsCard card={nextCards[0]} cardIndex={0} revealCard={revealCard} />
          <NewsCard card={nextCards[1]} cardIndex={1} revealCard={revealCard} />
          <NewsCard card={nextCards[2]} cardIndex={2} revealCard={revealCard} />
        </div>
        <div className='Next-news-container'>
          <button className='Next-news-button' onClick={() => nextNews()}>
            Next News
          </button>
        </div>
        <div className='Shuffle-button-container'>
          <button className='Shuffle-button' onClick={() => randomiseNews()}>
            Shuffle
          </button>
        </div>
      </div>
    );
  }
};

export default App;
