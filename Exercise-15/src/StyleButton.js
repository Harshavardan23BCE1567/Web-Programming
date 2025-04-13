import React from 'react';

const StyledButton = () => {
  return (
    <>
      <style>
        {`
          .styled-button {
            background-color: #4CAF50;
            padding: 10px 20px;
            font-size: 16px;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
        `}
      </style>
      <button className="styled-button">Styled Button</button>
    </>
  );
};

export default StyledButton;