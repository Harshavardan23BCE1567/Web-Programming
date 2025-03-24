import React from 'react';

function StyledButton() {
  return (
    <div>
      <style>
        {`
          .styled-button {
            background-color: green;
            padding: 10px 20px;
            font-size: 16px;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
        `}
      </style>
      <button className="styled-button">
        Internal Styled Button
      </button>
    </div>
  );
}

export default StyledButton;
