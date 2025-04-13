import React from 'react';

const StyledButton = () => {
  const buttonStyle = {
    backgroundColor: '#4CAF50',
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };
  
  return (
    <button style={buttonStyle}>Styled Button</button>
  );
};

export default StyledButton;