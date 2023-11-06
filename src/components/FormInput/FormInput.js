import React from 'react';

function FormInput({setGuessList}) {
  const [guess, setGuess] = React.useState("");
  function handleGuess(event) {
    const lastChar = event.target.value.toUpperCase()[event.target.value.length - 1];
    if (lastChar < 'A' || lastChar > 'Z') return;

    if (event.target.value.length === 6) {
      return;
    }
    setGuess(event.target.value.toUpperCase());
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    if (guess.length !== 5) {
      return;
    }
    console.log('form submitted with value:', guess);
    setGuessList((guessList) => [...guessList, guess]);
    setGuess("");
  }
  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleFormSubmission}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input required minLength={5} maxLength={5} pattern="[a-zA-Z]{5}" id="guess-input" type="text"  onChange={handleGuess} value={guess}/>
      </form>
    </div>
  );
}

export default FormInput;
