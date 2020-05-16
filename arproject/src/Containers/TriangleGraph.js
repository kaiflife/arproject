import React from "react";

const TriangleGraph = props => {
    const vertexes = [
        [-1.65, 1.2, props.rangeFromCamera],
        [1.65, 1.2, props.rangeFromCamera],
        [0, 3.1, props.rangeFromCamera],
    ]
    const planes = vertexes.map((item, index) => {
        if(index === vertexes.length-1){
            return props.getLineCoordinates(item, vertexes[0]);
        }
        return props.getLineCoordinates(item, vertexes[index+1]);
    })
    const planeMaps = planes.map(item => {
        return (
            <a-plane
                key={item.angle}
                position={item.coordinates}
                rotation={`0 0 ${item.angle}`} width={item.width}
                height="0.01" color="black"
            />
        )
    })
    return (
        <>
            <a-sphere position={`-1.65 1.2 ${props.rangeFromCamera}`} radius="0.3" color="red"/>
            <a-sphere position={`1.65 1.2 ${props.rangeFromCamera}`} radius="0.3" color="green"/>
            <a-sphere position={`0 3.1 ${props.rangeFromCamera}`} radius="0.3" color="yellow"/>
            {planeMaps}
        </>
    )
}

export default TriangleGraph;