import newsSprite from "./assets/news-cards.png"
import newsBack from "./assets/news-back.png";

function NewsCard(props) {

  console.log(props)
  
  const getCardPosition = (newsNumber) => {
    const x = (newsNumber - 1) % 10;
    const y = (newsNumber - 1 - x) / 10;
  
    const xSize = -360;
    const ySize = -260;
  
    const xPx = x * xSize;
    const yPx = y * ySize;
  
    return { x: xPx, y: yPx};
  }

  console.log(props.card);
  if ( props.card === null || !props.card.revealed ) {
    const backStyle = {
      height: 260,
      width: 360,
      margin: "auto",
      background: `url(${newsBack})`
    }
    console.log(`${props.card.number} not revealed`);
    return <div
      className="newsBack"
      style={backStyle}
      onClick={() => props.revealCard()}
    />
  }
  else {
    const cardPosition = getCardPosition(props.card.number);
    
    const cardStyle = {
      height: 260,
      width: 360,
      margin: "auto",
      background: `url(${newsSprite}) ${cardPosition.x}px ${cardPosition.y}px`
    }
    console.log(`${props.card.number} revealed`);
    return (
      <div
        className="newsCard"
        style={cardStyle}
        onClick={() => props.revealCard()}
      />
    )
  }
}

export default NewsCard;
