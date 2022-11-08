import { useState } from 'react';

const Calculator = () => {
  const reset = () => {
    setTotal(0);
  };

  const getTotalFromStorage = () => {
    const total = localStorage.getItem('total');
    if (total !== null) {
      return parseInt(total);
    } else {
      return 0;
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

  return (
    <div className='Calculator-container'>
      <div className='Total'>{total}</div>
      <div>
        <button className='Total-change' onClick={() => subtract(1)}>
          -1
        </button>
        <button className='Total-change' onClick={() => subtract(10)}>
          -10
        </button>
        <button className='Total-change' onClick={() => add(10)}>
          +10
        </button>
        <button className='Total-change' onClick={() => add(1)}>
          +1
        </button>
      </div>
      <button className='Reset' onClick={() => reset()}>
        Reset
      </button>
    </div>
  );
};

export default Calculator;
