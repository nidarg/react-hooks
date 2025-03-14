import React, { useRef, useState } from 'react';

const UndoFunctionalityWithUseRef = () => {
  const [inputText, setInputText] = useState(''); // current text state
  const history = useRef([]); //store previous text inputs
  const historyIndex = useRef(-1); //keep track of current index in hostory

  // handle text input change
  const handleChange = (e) => {
    const newText = e.target.value;

    // if undo was used remove future states before saving new input
    if (historyIndex.current < history.current.length - 1) {
      history.current = history.current.slice(0, historyIndex.current + 1);
    }

    //save current state before updating the state
    history.current.push(inputText);
    historyIndex.current = history.current.length - 1;

    setInputText(newText);
  };
  // Handle Undo Action
  const handleUndo = () => {
    if (historyIndex.current > 0) {
      historyIndex.current--; // Move back in history
      setInputText(history.current[historyIndex.current]); // Restore previous text
    }
  };

  return (
    <div>
      <input type='text' value={inputText} onChange={handleChange} />
      <button onClick={handleUndo} disabled={historyIndex.current <= 0}>
        Undo
      </button>
    </div>
  );
};

export default UndoFunctionalityWithUseRef;
