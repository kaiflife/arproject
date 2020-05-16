import React from "react";

const getLineCoordinates = (firstCoords, secondCoords) => {
    const newCoordinates = secondCoords.map((item, index) => (item - firstCoords[index])**2)
    const width = Math.sqrt(newCoordinates.reduce((sum, current) => sum+current, 0));
    const middleCoords = secondCoords.map((item, index) => (item+firstCoords[index])/2)
    const x = middleCoords[0];
    const y = middleCoords[1];
    const z = middleCoords[2];
    const coordinates = [x,y,z];
    const counter = firstCoords.slice(0,2).reduce((sum, current, index) => sum+current*secondCoords[index], 0);
    const bottomFirst = Math.sqrt(firstCoords.slice(0,2).reduce((sum, current) => sum+current**2, 0));
    const bottomSecond = Math.sqrt(secondCoords.slice(0,2).reduce((sum, current) => sum+current**2, 0));
    const delimiter = bottomFirst*bottomSecond;
    const isOpposite = firstCoords[0] > 0;
    const isParallel = firstCoords[1] === secondCoords[1];
    const angle = isParallel ? 0 : Math.cos(counter / delimiter) * (180/Math.PI);
    return {coordinates: coordinates.join(' '), width, angle: isOpposite ? -angle : angle};
}

const EilerGraph = props => {
    const vertexes = [
        [-1.65, 1.2, props.rangeFromCamera],
        [1.65, 1.2, props.rangeFromCamera],
        [0, 3.1, props.rangeFromCamera],
    ]
    const planes = vertexes.map((item, index) => {
        if(index === vertexes.length-1){
            return getLineCoordinates(item, vertexes[0]);
        }
        return getLineCoordinates(item, vertexes[index+1]);
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

export default EilerGraph;