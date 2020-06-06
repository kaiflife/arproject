import React from 'react';
import './App.css';
import Graph from "./Containers/Graph";
import {eulerGraph, regularGraph, triangleGraph} from "./constants/graphs";
import triangleSet from '../src/assets/images/triangle.fset';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <a-scene
              vr-mode-ui="enabled: false;"
              renderer="logarithmicDepthBuffer: true;"
              embedded
              arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
          >
            <a-nft type="nft"
                  url="./src/assets/images/triangle.fset"
                  smooth="true"
                  smoothCount="10"
                  smoothTolerance=".01"
                  smoothThreshold="5">
                <Graph vertexes={triangleGraph} />
            </a-nft>
            <a-sky color="#ECECEC"/>
        </a-scene>
      </header>
    </div>
  );
}

export default App;
