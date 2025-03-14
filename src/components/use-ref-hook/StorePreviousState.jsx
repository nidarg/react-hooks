import React, { useState, useRef, useEffect } from 'react';

// useRef helps track the previous state of a component.
// ✅ The prevCountRef.current stores the previous value of count.
// ✅ useEffect updates prevCountRef after every state change.

// 🔹 When to Use?
// ✔️ Implementing undo functionality.
// ✔️ Comparing current vs. previous state.

const StorePreviousState = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(null);
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);
  return (
    <div>
      <p>Current count {count}</p>
      <p>Previous count {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>increase count</button>
    </div>
  );
};

export default StorePreviousState;
