import React, { useState } from 'react';
import { useStateContext } from './StateContext';

const SetUser = () => {
  const { dispatch } = useStateContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.name && formData.email) {
      dispatch({ type: 'SET_USER', payload: formData });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Name'
          type='text'
          value={formData.name}
          name='name'
          onChange={handleChange}
        />
        <input
          placeholder='Email'
          type='email'
          value={formData.email}
          name='email'
          onChange={handleChange}
        />
        <button type='submit'>set user</button>
      </form>
    </>
  );
};

export default SetUser;
