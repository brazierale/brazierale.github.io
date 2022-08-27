import newsSprite from "./assets/news-cards.png"
import newsBack from "./assets/news-back.png";

const NewsCard = ({card, cardIndex, revealCard}) => {
  
  const getCardPosition = (newsNumber) => {
    const x = (newsNumber - 1) % 10;
    const y = (newsNumber - 1 - x) / 10;
  
    const xSize = -360;
    const ySize = -260;
  
    const xPx = x * xSize;
    const yPx = y * ySize;
  
    return { x: xPx, y: yPx};
  }

  if ( card === null || !card.revealed ) {
    console.log('unrevealed');
    const backStyle = {
      height: 260,
      width: 360,
      margin: "auto",
      background: `url(${newsBack})`
    }
    return <div
      className="News-unrevealed"
      style={backStyle}
      onClick={() => revealCard(cardIndex)}
    />
  }
  else {
    console.log('revealed');
    const cardPosition = getCardPosition(card.number);
    
    const cardStyle = {
      height: 260,
      width: 360,
      margin: "auto",
      background: `url(${newsSprite}) ${cardPosition.x}px ${cardPosition.y}px`
    }
    return (
      <div
        className="News-revealed"
        style={cardStyle}
        onClick={() => revealCard(cardIndex)}
      />
    )
  }
}

export default NewsCard;
