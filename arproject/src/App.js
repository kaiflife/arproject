import React from 'react';
import './App.css';
import Graph from "./Containers/Graph";
import {eulerGraph, regularGraph, triangleGraph} from "./constants/graphs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a-scene>
          <Graph vertexes={regularGraph} />
          <a-sky color="#ECECEC"/>
        </a-scene>
      </header>
    </div>
  );
}

export default App;
