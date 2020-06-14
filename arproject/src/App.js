import React, {useEffect} from 'react';
import './App.css';
import {regularGraph, triangleGraph} from "./constants/graphs";
import Graph from "./Containers/Graph";
import ReactDOMServer from 'react-dom/server';

const markerProps = [
  {
    id: 3,
    url: './pattern-3.patt',
    component: <Graph vertexes={triangleGraph}/>
  },
  {
    id: 4,
    url: './pattern-4.patt',
    component: <Graph vertexes={regularGraph}/>
  },
];

function App() {
  useEffect(() => {
    markerProps.forEach(item => {
      const marker = document.querySelector(`#Marker_${item.id}`);
      console.log(item.component);
    })
  }, []);
  return <div />
}

export default App;


