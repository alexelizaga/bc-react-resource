import { useState } from 'react';
import PropTypes from 'prop-types';

export const useCounter = ( initialState = 10 ) => {
  const [counter, setCounter] = useState(initialState);

  const increment = () => {
    setCounter( counter + 1 );
  }
  const decrement = () => {
    setCounter( counter - 1 );
  }
  const reset = () => {
    setCounter(initialState);
  }

  return {
    counter,
    increment,
    decrement,
    reset,
  }
}

useCounter.propTypes = {
  initialState: PropTypes.number,
};
