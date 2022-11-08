import newsSprite from './assets/news-cards.png';
import newsBack from './assets/news-back.png';
import './NewsCard.css';

export type News = {
  number: number;
  revealed: boolean;
};

type Card = {
  card: News;
  cardIndex: number;
  revealCard: (cardIndex: number) => void;
};

const NewsCard = ({ card, cardIndex, revealCard }: Card) => {
  const getCardPosition = (newsNumber: number) => {
    const x = (newsNumber - 1) % 10;
    const y = (newsNumber - 1 - x) / 10;

    const xSize = -360;
    const ySize = -260;

    const xPx = x * xSize;
    const yPx = y * ySize;

    return { x: xPx, y: yPx };
  };

  if (!card.revealed) {
    const backStyle = {
      height: 260,
      width: 360,
      margin: 'auto',
      background: `url(${newsBack})`,
    };
    return (
      <div className='News-card'>
        <div
          className='News-unrevealed'
          style={backStyle}
          onClick={() => revealCard(cardIndex)}
        />
      </div>
    );
  } else {
    const cardPosition = getCardPosition(card.number);

    const cardStyle = {
      height: 260,
      width: 360,
      margin: 'auto',
      background: `url(${newsSprite}) ${cardPosition.x}px ${cardPosition.y}px`,
    };
    return (
      <div className='News-card'>
        <div
          className='News-revealed'
          style={cardStyle}
          onClick={() => revealCard(cardIndex)}
        />
      </div>
    );
  }
};

export default NewsCard;
