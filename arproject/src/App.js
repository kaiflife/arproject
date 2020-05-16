import React from 'react';
import './App.css';
import TriangleGraph from "./TriangleGraph";

const rangeFromCamera = '-2.5';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a-scene>
          <TriangleGraph rangeFromCamera={rangeFromCamera} />
          <a-sky color="#ECECEC"/>
        </a-scene>
      </header>
    </div>
  );
}

export default App;
