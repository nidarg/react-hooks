import React from 'react';
import { useStateContext } from './StateContext';

const DisplayUser = () => {
  const {
    state: { user },
  } = useStateContext();
  return (
    <div>
      <h1>display the user from context</h1>
      <h3>{user ? `User: ${user.name} Email:${user.email}` : 'No User'}</h3>
    </div>
  );
};

export default DisplayUser;
