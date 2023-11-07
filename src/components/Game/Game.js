import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import FormInput from '../FormInput';
import GuessHistory from '../GuessHistory';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.

const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  let gameStatus = null;
  if (guessList.length >= 1) {
    if (guessList[guessList.length - 1] === answer) {
      gameStatus = "win";
    } else if (guessList.length === NUM_OF_GUESSES_ALLOWED) {
      gameStatus = "lose";
    }
  }
  return (
  <>
    {gameStatus === "win" ? <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in <strong>{guessList.length} guesses</strong>
      </p>
    </div> : gameStatus === "lose" ? <div className="sad banner">
      <p>
        <strong>Sorry!</strong> The answer is <strong>{answer}</strong>
      </p>
    </div> : <div></div>}
    <GuessHistory guessList={guessList} answer={answer}/>
    {!gameStatus ? <FormInput setGuessList={setGuessList}/> : <div></div>}
  </>);
}

export default Game;
