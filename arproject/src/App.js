import React, {useEffect, useState} from 'react';
import './App.css';
import {eulerGraph, regularGraph, sixGraph, triangleGraph, twentyFourGraph} from "./constants/graphs";
import Graph from "./Containers/Graph";
import {componentWillAppendToBody} from "react-append-to-body";

const graphs = [
  {vertexes: eulerGraph, name: '5 вершин', subtreeContainer: '#Marker_5'},
  {vertexes: regularGraph, name: '4 вершины', subtreeContainer: '#Marker_4'},
  {vertexes: sixGraph, name: '6 вершин', subtreeContainer: '#Marker_6'},
  {vertexes: triangleGraph, name: '3 вершины', subtreeContainer: '#Marker_3'},
  {vertexes: twentyFourGraph, name: '24 вершины', subtreeContainer: '#Marker_3'}
];

const componentGraphs = graphs.map(item => {
  const NewComponent =
      componentWillAppendToBody(() => {
        return <Graph vertexes={item.vertexes} graphName={item.name} />;
      });
  return <NewComponent key={item.name} subtreeContainer={item.subtreeContainer}/>;
})

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {setIsLoading(true)}, []);

  if(!isLoading) return <><p>Loading</p></>
  return <div>{componentGraphs}</div>
}

export default App;