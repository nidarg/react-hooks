import React from 'react';
import { StateProvider } from './StateContext';
import SetUser from './SetUser';
import DisplayUser from './DisplayUser';
import SetTheme from './SetTheme';

const WrapperContextWithReducer = () => {
  return (
    <>
      <StateProvider>
        <SetUser />
        <DisplayUser />
        <SetTheme />
      </StateProvider>
    </>
  );
};

export default WrapperContextWithReducer;
