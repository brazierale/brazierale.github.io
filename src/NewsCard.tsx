import newsSprite from './assets/news-cards.png';
import newsBack from './assets/news-back.png';

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
  const cardHeight = 274;
  const cardWidth = 374;
  const margin = '24px';
  const borderRadius = '5%';

  const getCardPosition = (newsNumber: number) => {
    const x = (newsNumber - 1) % 10;
    const y = (newsNumber - 1 - x) / 10;

    const xSize = -cardWidth;
    const ySize = -cardHeight;

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
