import React from 'react';
import './App.css';
import {triangleGraph} from "./constants/graphs";
import Graph from "./Containers/Graph";

function App() {
  return <Graph vertexes={triangleGraph} />;
}

export default App;
