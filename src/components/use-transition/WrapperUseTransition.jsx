import React, { useState, useTransition } from 'react';
import Products from './Products';

const WrapperUseTransition = () => {
  const [tab, setTab] = useState('home');
  const [isPending, startTransition] = useTransition();

  const switchTab = (tab) => {
    startTransition(() => setTab(tab));
  };

  const setStyles = (thisTab) => {
    return {
      backgroundColor: tab === thisTab ? '#262626' : 'white',
      color: tab === thisTab ? 'white' : 'black',
    };
  };

  return (
    <main>
      <nav>
        <button onClick={() => switchTab('home')} style={setStyles('home')}>
          Home
        </button>
        <button
          onClick={() => switchTab('products')}
          style={setStyles('products')}
        >
          Products
        </button>
        <button onClick={() => switchTab('about')} style={setStyles('about')}>
          About
        </button>
      </nav>
      <div>
        {isPending && <p>Loading ...</p>}
        {tab === 'home' && <h1>Home page</h1>}
        {tab === 'products' && <Products />}
        {tab === 'about' && <h1>About page</h1>}
      </div>
    </main>
  );
};

export default WrapperUseTransition;
