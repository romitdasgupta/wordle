import React from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessHistory({guessList, answer}) {
  const guesses = [];
  console.log(guessList.length);
  for (let i = 0; i < guessList.length; i++) {
    guesses.push(guessList[i]);
  }
  for (let i = guessList.length; i < NUM_OF_GUESSES_ALLOWED; i++) {
    guesses.push("");
  }

  return (
    <div className="guess-results">
      {guesses.map((guess, index) => { return (index < NUM_OF_GUESSES_ALLOWED) ? <Guess guess={guess} answer={answer} key={index}/> : null })}
    </div>
  );
}

export default GuessHistory;
