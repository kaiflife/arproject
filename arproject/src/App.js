import React from 'react';
import './App.css';
import EilerGraph from "./Containers/EilerGraph";

const rangeFromCamera = -4;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a-scene>
          <EilerGraph rangeFromCamera={rangeFromCamera} />
          <a-sky color="#ECECEC"/>
        </a-scene>
      </header>
    </div>
  );
}

export default App;
