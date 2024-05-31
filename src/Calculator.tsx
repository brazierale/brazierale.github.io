import { useState } from 'react';
import { stocks } from './Stocks';

const Calculator = () => {
  const reset = () => {
    setTotal(50);
  };

  const getTotalFromStorage = () => {
    const total = localStorage.getItem('total');
    if (total !== null) {
      return parseInt(total);
    } else {
      return 50;
    }
  };
  const setTotalInStorage = (total: number) => {
    localStorage.setItem('total', total.toString());
  };

  const [total, setTotal] = useState(getTotalFromStorage());

  const add = (toAdd: number) => {
    const newTotal = total + toAdd;
    setTotal(newTotal);
    setTotalInStorage(newTotal);
  };

  const subtract = (toAdd: number) => {
    const newTotal = total - toAdd;
    setTotal(newTotal);
    setTotalInStorage(newTotal);
  };

  const ManualControls = () => {
    return (
      <div className='Manual-controls'>
        <button className='Manual-change-button' onClick={() => subtract(1)}>
          -1
        </button>
        <button className='Manual-change-button' onClick={() => subtract(10)}>
          -10
        </button>
        <button className='Manual-change-button' onClick={() => add(10)}>
          +10
        </button>
        <button className='Manual-change-button' onClick={() => add(1)}>
          +1
        </button>
      </div>
    );
  };

  const QuickControls = () => {
    const getControlTypeFromStorage = () => {
      const type = () => localStorage.getItem('controlType');
      return type;
    };

    const setControlType = (controlType: string) => {
      const currentType = localStorage.getItem('controlType');
      if (controlType === currentType) {
        setControlTypeInState(null);
        localStorage.setItem('controlType', 'null');
      } else {
        setControlTypeInState(controlType);
        localStorage.setItem('controlType', controlType);
      }
    };

    const [controlType, setControlTypeInState] = useState(
      getControlTypeFromStorage()
    );

    const dividendButtons = (dividends: number[]) => {
      return dividends.map((dividend) => (
        <div>
          <button className='Dividend-button' onClick={() => add(dividend)}>
            +{dividend}
          </button>
        </div>
      ));
    };

    const buyButtons = (prices: number[]) => {
      return prices.map((price) => (
        <div>
          <button className='Buy-button' onClick={() => subtract(price)}>
            -{price}
          </button>
        </div>
      ));
    };

    const sellButtons = (prices: number[]) => {
      return prices.map((price) => (
        <div>
          <button className='Sell-button' onClick={() => add(price)}>
            +{price}
          </button>
        </div>
      ));
    };

    const dividendControls = () => {
      return stocks.map((stock) => (
        <div className='Dividend-container'>
          <div className='Dividend-name'>{stock.name}</div>
          {dividendButtons(stock.dividends)}
        </div>
      ));
    };

    const buyControls = () => {
      return stocks.map((stock) => (
        <div className='Price-container'>
          <div className='Price-name'>{stock.name}</div>
          {buyButtons(stock.prices)}
        </div>
      ));
    };

    const sellControls = () => {
      return stocks.map((stock) => (
        <div className='Price-container'>
          <div className='Price-name'>{stock.name}</div>
          {sellButtons(stock.prices)}
        </div>
      ));
    };

    const selectedView = () => {
      switch (controlType) {
        case 'buy': {
          return buyControls();
        }
        case 'sell': {
          return sellControls();
        }
        case 'dividend': {
          return dividendControls();
        }
        default:
      }
    };

    return (
      <div className='Quick-controls'>
        <div className='View-buttons'>
          <button
            className='Buy-view-button'
            onClick={() => setControlType('buy')}
          >
            Buy
          </button>
          <button
            className='Sell-view-button'
            onClick={() => setControlType('sell')}
          >
            Sell
          </button>
          <button
            className='Dividend-view-button'
            onClick={() => setControlType('dividend')}
          >
            Dividend
          </button>
        </div>
        <div className='Selected-view'>{selectedView()}</div>
      </div>
    );
  };

  return (
    <div className='Calculator-container'>
      <div className='Total'>{total}</div>
      <div className='Total-controls'>
        <ManualControls />
        <QuickControls />
        <button className='Reset' onClick={() => reset()}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Calculator;
