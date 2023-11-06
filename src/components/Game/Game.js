import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import FormInput from '../FormInput';
import GuessHistory from '../GuessHistory';
// Pick a random word on every pageload.

const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
function Game() {
  const [guessList, setGuessList] = React.useState([]);
  return (
  <>
    <GuessHistory guessList={guessList}/>
    Put a game here!
    <FormInput setGuessList={setGuessList}/>
  </>);
}

export default Game;
