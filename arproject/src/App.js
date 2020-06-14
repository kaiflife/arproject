import React from 'react';
import './App.css';
import {eulerGraph, regularGraph, triangleGraph} from "./constants/graphs";
import Graph from "./Containers/Graph";
import {componentWillAppendToBody} from "react-append-to-body";

const EulerGraph = () => {
  return <Graph vertexes={eulerGraph}/>
}

const RegularGraph = () => {
  return <Graph vertexes={regularGraph}/>
}

const TriangleGraph = () => {
  return <Graph vertexes={triangleGraph}/>
}

const AppendedTriangle = componentWillAppendToBody(TriangleGraph);
const AppendedEuler = componentWillAppendToBody(EulerGraph);
const AppendedRegular = componentWillAppendToBody(RegularGraph);

const App = () => {
  return <div>
    <AppendedTriangle subtreeContainer='#Marker_3'/>
    <AppendedRegular subtreeContainer='#Marker_4'/>
    <AppendedEuler subtreeContainer='#Marker_5'/>
  </div>
}

export default App;


const markerProps = [
  {
    id: 3,
    url: './pattern-3.patt',
    component: TriangleGraph
  },
  {
    id: 4,
    url: './pattern-4.patt',
    component: RegularGraph
  },
  {
    id: 5,
    url: './pattern-5.patt',
    component: EulerGraph,
  },
];