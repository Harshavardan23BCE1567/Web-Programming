import React from 'react';

function StyledButton() {
  const buttonStyle = {
    backgroundColor: 'blue',
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <button style={buttonStyle}>
      Inline Styled Button
    </button>
  );
}

export default StyledButton;
