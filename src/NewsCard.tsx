import newsSprite from './assets/news-cards@0.3x.png';
import newsBack from './assets/news-back@0.3x.png';

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
  const cardHeight = 244;
  const cardWidth = 333;
  const margin = '12px';
  const borderRadius = '12px';

  const getCardPosition = (newsNumber: number) => {
    const x = (newsNumber - 1) % 10;
    const y = (newsNumber - 1 - x) / 10;

    const xSize = -cardWidth - 3.9;
    const ySize = -cardHeight - 2.8;

    const xPx = x * xSize;
    const yPx = y * ySize;

    return { x: xPx, y: yPx };
  };

  if (!card.revealed) {
    const backStyle = {
      height: cardHeight,
      width: cardWidth,
      margin: margin,
      borderRadius: borderRadius,
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
    const className = `News-card-${card.number}`;

    const cardStyle = {
      height: cardHeight,
      width: cardWidth,
      margin: margin,
      borderRadius: borderRadius,
      background: `url(${newsSprite}) ${cardPosition.x}px ${cardPosition.y}px`,
    };
    return (
      <div className={className}>
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
