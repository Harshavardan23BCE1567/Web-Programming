import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Focus Input Example</h2>
      <input type="text" ref={inputRef} placeholder="Click the button to focus" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
