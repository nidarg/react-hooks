import React, { useContext, useReducer, createContext } from 'react';
import { reducer } from './reducer';

const initialState = {
  user: { name: '', email: '' },
  theme: 'light',
};

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

const useStateContext = () => useContext(StateContext);
export { StateProvider, useStateContext };
