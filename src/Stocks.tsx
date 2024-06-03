import aLogo from './assets/a-logo.png';
import bLogo from './assets/b-logo.png';
import cLogo from './assets/c-logo.png';
import dLogo from './assets/d-logo.png';
import eLogo from './assets/e-logo.png';
import fLogo from './assets/f-logo.png';
import gLogo from './assets/g-logo.png';
import hLogo from './assets/h-logo.png';
import iLogo from './assets/i-logo.png';
import jLogo from './assets/j-logo.png';
import kLogo from './assets/k-logo.png';
import lLogo from './assets/l-logo.png';

export type Stock = {
  id: string;
  name: string;
  dividends: number[];
  prices: number[];
  image: any;
};

export const stocks = [
  {
    id: 'A',
    name: 'Alpaca Chemical',
    prices: [2, 4, 5, 7, 9, 12, 15, 20],
    dividends: [0, 1, 2, 3, 7],
    image: aLogo,
  },
  {
    id: 'B',
    name: 'Back to the Futon',
    prices: [1, 3, 4, 6, 8, 10, 14, 18],
    dividends: [0, 1, 2, 3, 4],
    image: bLogo,
  },
  {
    id: 'C',
    name: 'Caspian',
    prices: [2, 4, 6, 8, 10, 18, 22, 28],
    dividends: [0, 0, 0, 4, 8],
    image: cLogo,
  },
  {
    id: 'D',
    name: 'Darc Fuels',
    prices: [3, 4, 5, 7, 9, 12, 16, 20],
    dividends: [0, 1, 2, 4, 5],
    image: dLogo,
  },
  {
    id: 'E',
    name: 'Evaal Bank',
    prices: [4, 6, 8, 12, 14, 16, 20, 24],
    dividends: [0, 2, 4, 5, 6],
    image: eLogo,
  },
  {
    id: 'F',
    name: `Freddy's`,
    prices: [2, 4, 6, 8, 10, 12, 14, 18],
    dividends: [1, 1, 2, 2, 3],
    image: fLogo,
  },
  {
    id: 'G',
    name: 'Gammaray',
    prices: [2, 4, 5, 8, 11, 16, 20, 26],
    dividends: [0, 0, 1, 4, 7],
    image: gLogo,
  },
  {
    id: 'H',
    name: 'High Season Steel',
    prices: [1, 3, 5, 7, 9, 12, 15, 20],
    dividends: [0, 1, 2, 4, 6],
    image: hLogo,
  },
  {
    id: 'I',
    name: 'Inside Solar',
    prices: [3, 4, 5, 7, 10, 14, 18, 22],
    dividends: [0, 1, 2, 4, 6],
    image: iLogo,
  },
  {
    id: 'J',
    name: `Jack's Jackets`,
    prices: [2, 3, 4, 6, 8, 10, 12, 16],
    dividends: [0, 1, 2, 3, 5],
    image: jLogo,
  },
  {
    id: 'K',
    name: 'Kafka Kars',
    prices: [2, 4, 5, 8, 13, 18, 24, 30],
    dividends: [0, 0, 0, 3, 9],
    image: kLogo,
  },
  {
    id: 'L',
    name: 'Low Life Insurance',
    prices: [3, 4, 7, 10, 13, 15, 18, 22],
    dividends: [0, 1, 2, 4, 6],
    image: lLogo,
  },
];
