import React from "react";

const TriangleGraph = ({props}) => {
    return (
        <div>
            <a-sphere position={`-1.65 1.2 ${props.props.rangeFromCamera}`} radius="0.3" color="red"/>
            <a-sphere position={`1.65 1.2 ${props.rangeFromCamera}`} radius="0.3" color="green"/>
            <a-sphere position={`0 3.1 ${props.rangeFromCamera}`} radius="0.3" color="yellow"/>
            <a-plane position={`0 1.2 ${props.rangeFromCamera}`} rotation="0 0 0" width="3" height="0.01" color="black"/>
            <a-plane position={`-0.8 2.1 ${props.rangeFromCamera}`} rotation="0 0 45" width="3" height="0.01" color="black"/>
            <a-plane position={`0.8 2.1 ${props.rangeFromCamera}`} rotation="0 0 -45" width="3" height="0.01" color="black"/>
        </div>
    )
}

export default TriangleGraph;