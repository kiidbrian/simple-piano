import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Simple Piano</h3>

      <div className="piano">
        <button className="white-key C1-key"></button>
        <button className="black-key Db1-key"></button>
        <button className="white-key Db-key"></button>
        <button className="black-key Eb1-key"></button>
        <button className="white-key E1-key"></button>
        <button className="white-key F1-key"></button>
        <button className="black-key Gb1-key"></button>
        <button className="white-key G1-key"></button>
        <button className="black-key Ab1-key"></button>
        <button className="white-key A1-key"></button>
        <button className="black-key Bb1-key"></button>
        <button className="white-key B1-key"></button>
      </div>
    </div>
  );
}

export default App;
