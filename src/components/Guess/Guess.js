import React from 'react';
import { checkGuess } from '../../game-helpers';

function Guess({guess, answer}) {

  let guessEvaluation = null;
  if (guess === "") {
    guess = "     ";
  } else {
    guessEvaluation = checkGuess(guess, answer);
  }
  return (
      <p className="guess">
      {
        guess.split('').map((letter, index) => {
          let classTypeContent = "cell ";
          if (guessEvaluation) {
            classTypeContent += guessEvaluation[index].status;
          }
          return <span key={index} className={classTypeContent}>{letter}</span>;
      })
      }
      </p>
  );
}

export default Guess;
