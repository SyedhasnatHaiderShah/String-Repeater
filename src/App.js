import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputString, setInputString] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputString || !inputNumber) {
      setError('Both fields are required.');
      return;
    }

    if (isNaN(inputNumber) || parseInt(inputNumber) < 1) {
      setError('Please enter a valid number greater than 0.');
      return;
    }

    setError('');
    setOutput(inputString.repeat(parseInt(inputNumber)));
  };

  return (
    <div className="App">
      <h1>String Repeater</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a string"
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter a number"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p className="error">{error}</p>}
      {output && <p>{output}</p>}
    </div>
  );
}

export default App;
