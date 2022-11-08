export type Stock = {
  id: string;
  name: string;
  dividends: number[];
  price: number[];
};

export const stocks = [
  {
    id: 'A',
    name: 'Alpaca Chemical',
    price: [2, 4, 5, 7, 9, 12, 15, 20],
    dividends: [0, 1, 2, 3, 7],
  },
  {
    id: 'B',
    name: 'Back to the Futon',
    price: [1, 3, 4, 6, 8, 10, 14, 18],
    dividends: [0, 1, 2, 3, 4],
  },
  {
    id: 'C',
    name: 'Caspian',
    price: [2, 4, 6, 8, 10, 18, 22, 28],
    dividends: [0, 0, 0, 4, 8],
  },
  {
    id: 'D',
    name: 'Darc Fuels',
    price: [3, 4, 5, 7, 9, 12, 16, 20],
    dividends: [0, 1, 2, 4, 5],
  },
  {
    id: 'E',
    name: 'Evaal Bank',
    price: [4, 6, 8, 12, 14, 16, 20, 24],
    dividends: [0, 2, 4, 5, 6],
  },
  {
    id: 'F',
    name: `Freddy's`,
    price: [2, 4, 6, 8, 10, 12, 14, 18],
    dividends: [1, 1, 2, 2, 3],
  },
  {
    id: 'G',
    name: 'Gammaray',
    price: [2, 4, 5, 8, 11, 16, 20, 26],
    dividends: [0, 0, 1, 4, 7],
  },
  {
    id: 'H',
    name: 'High Season Steel',
    price: [1, 3, 5, 7, 9, 12, 15, 20],
    dividends: [0, 1, 2, 4, 6],
  },
  {
    id: 'I',
    name: 'Inside Solar',
    price: [3, 4, 5, 7, 10, 14, 18, 22],
    dividends: [0, 1, 2, 4, 6],
  },
  {
    id: 'J',
    name: `Jack's Jackets`,
    price: [2, 3, 4, 6, 8, 10, 12, 16],
    dividends: [0, 1, 2, 3, 5],
  },
  {
    id: 'K',
    name: 'Kafka Kars',
    price: [2, 4, 5, 8, 13, 18, 24, 30],
    dividends: [0, 0, 0, 3, 9],
  },
  {
    id: 'L',
    name: 'Low Life Insurance',
    price: [3, 4, 7, 10, 13, 15, 18, 22],
    dividends: [0, 1, 2, 4, 6],
  },
];
