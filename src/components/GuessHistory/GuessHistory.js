import React from 'react';

function GuessHistory({guessList}) {  
  return (
  <div className="guess-results">
    <ul>
      {guessList.map((guess, index) => (
        <li key={index} className="guess">{guess}</li>
      ))}
    </ul>
  </div>
  );
}

export default GuessHistory;
