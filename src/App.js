import newsSprite from "./assets/news-cards.png"
import newsBack from "./assets/news-back.png";
import './App.css';;

function App() {
  return (
    <div className="App">
      {newsCard()}
      <button onClick={() => randomiseNews()}>Randomise News</button>
      <button onClick={() => revealCard()}>Reveal Card</button>
    </div>
  );
}

const revealCard = () => {
  const nextCard = localStorage.getItem("nextCard");
  localStorage.setItem("nextCard", { ...nextCard, revealed: true });
}

function newsCard() {
  const nextCard = localStorage.getItem("nextCard");

  if(nextCard === null || !nextCard.revealed) {
    const backStyle = {
      height: 260,
      width: 360,
      margin: "10px",
      background: `url(${newsBack})`
    }
    return <div className="newsBack" style={backStyle}/>
  }
  else {
    const cardPosition = getCardPosition(nextCard.number);
    
    const cardStyle = {
      height: 260,
      width: 360,
      margin: "10px",
      background: `url(${newsSprite}) ${cardPosition.x}px ${cardPosition.y}px`
    }
  
    return <div className="newsCard" style={cardStyle}/>
  }
}

const getCardPosition = (newsNumber) => {
  const x = (newsNumber - 1) % 10;
  const y = (newsNumber - 1 - x) / 10;

  const xSize = -360;
  const ySize = -260;

  const xPx = x * xSize;
  const yPx = y * ySize;

  return { x: xPx, y: yPx};
}

const randomiseNews = () => {
  const newsArray = [];
  for (let i = 0; i < 90; i++) {
    newsArray.push(i + 1);
  }
  const randomisedNews = shuffleArray(newsArray);
  localStorage.setItem("news", randomisedNews);
  localStorage.setItem("nextCard", {number: randomisedNews[0], revealed: false});
}

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default App;
