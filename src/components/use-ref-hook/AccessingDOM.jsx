import React, { useRef } from 'react';

// useRef allows direct access to a DOM element without needing document.querySelector().
// 🔹 How It Works?
// ✅ useRef stores a reference to the <input> element.
// ✅ inputRef.current.focus() is called when the button is clicked.

// 🔹 When to Use?
// ✔️ Auto-focusing an input field on load.
// ✔️ Manually focusing an input when clicking a button.

const AccessingDOM = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type='text' ref={inputRef} placeholder='Type here...' />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default AccessingDOM;
