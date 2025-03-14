import React, { useReducer } from 'react';

//initrial state
const initialState = { counter: 0 };

// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 };
    case 'decrement':
      return { ...state, counter: state.counter - 1 };
    case 'reset':
      return { ...state, counter: 0 };
    default:
      return state;
  }
};

const BasicUseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter: {state.counter}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>DECREMENT</button>
      <button onClick={() => dispatch({ type: 'reset' })}>RESET</button>
    </div>
  );
};

export default BasicUseReducerHook;
