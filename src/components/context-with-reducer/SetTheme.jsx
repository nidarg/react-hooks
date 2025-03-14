import React from 'react';
import { useStateContext } from './StateContext';

const SetTheme = () => {
  const {
    state: { theme },
    dispatch,
  } = useStateContext();
  const toggleTheme = () =>
    dispatch({
      type: 'SET_THEME',
      payload: theme === 'light' ? 'dark' : 'light',
    });

  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Switch to Dark theme' : 'Switch to Light theme'}
      </button>
    </div>
  );
};

export default SetTheme;
