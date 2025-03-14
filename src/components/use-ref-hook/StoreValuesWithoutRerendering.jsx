import React, { useState, useRef } from 'react';

// Unlike useState, useRef can store values without triggering re-renders.
// 🔹 How It Works?
// ✅ useRef keeps a count of renders without causing additional re-renders.
// ✅ Every time the button is clicked, only useState triggers a re-render.

// 🔹 When to Use?
// ✔️ Measuring how many times a component has re-rendered.
// ✔️ Storing non-UI-related data without triggering re-renders.

const StoreValuesWithoutRerendering = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(1);

  renderCount.current += 1;

  return (
    <>
      <h2>Component rerenders: {renderCount.current}</h2>
      <button onClick={() => setCount(count + 1)}>increase count</button>
    </>
  );
};

export default StoreValuesWithoutRerendering;
