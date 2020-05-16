import React from "react";
import getLinesCoordinates from "../helpers/getLineCoordinates";

const EilerGraph = props => {
    const vertexes = [
        [-2, 2, props.rangeFromCamera],
        [2, 2, props.rangeFromCamera],
        [2, 1, props.rangeFromCamera],
        [-2, 1, props.rangeFromCamera],
    ];

    const formattedCoords = getLinesCoordinates(vertexes);

    const planeMaps = formattedCoords.map(item => {
        return (
            <a-plane
                key={`${item.coordinates[0] + item.coordinates[1]}`}
                position={item.coordinates}
                rotation={`0 0 ${item.angle}`} width={item.width}
                height="0.01" color="black"
            />
        )
    })

    const vertexMaps = vertexes.map((item) => {
        return <a-sphere key={`${item[0] + item[1]}`} position={item.join(' ')} radius="0.3" color="red"/>
    })
    return (
        <>
            {vertexMaps}
            {planeMaps}
        </>
    )
}

export default EilerGraph;