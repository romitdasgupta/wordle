import React from 'react';

function Guess({guess}) {
  return (
      <p className="guess">
      {
        guess.split('').map((letter, index) => {
          return <span key={index} className="cell">{letter}</span>;
      })
      }
      </p>
  );
}

export default Guess;
