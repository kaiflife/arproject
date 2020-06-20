import React from 'react';
import './App.css';
import {eulerGraph, regularGraph, sixGraph, triangleGraph} from "./constants/graphs";
import Graph from "./Containers/Graph";
import {componentWillAppendToBody} from "react-append-to-body";

const EulerGraph = () => <Graph vertexes={eulerGraph}/>
const RegularGraph = () => <Graph vertexes={regularGraph}/>
const TriangleGraph = () => <Graph vertexes={triangleGraph}/>
const SixGraph = () => <Graph vertexes={sixGraph}/>

const AppendedTriangle = componentWillAppendToBody(TriangleGraph);
const AppendedEuler = componentWillAppendToBody(EulerGraph);
const AppendedRegular = componentWillAppendToBody(RegularGraph);
const AppendedSix = componentWillAppendToBody(SixGraph);

const App = () => {
  return <div>
    <AppendedTriangle subtreeContainer='#Marker_3'/>
    <AppendedRegular subtreeContainer='#Marker_4'/>
    <AppendedEuler subtreeContainer='#Marker_5'/>
    <AppendedSix subtreeContainer='#Marker_6'/>
  </div>
}

export default App;