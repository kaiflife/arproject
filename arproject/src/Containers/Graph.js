import React from "react";
import getLinesCoordinates from "../helpers/getLineCoordinates";

const Graph = ({vertexes}) => {

    const formattedCoords = getLinesCoordinates(vertexes);

    const planeMaps = formattedCoords.map(item => {
        return (
            <a-plane
                key={`${item.coordinates}${item.angle}`}
                position={item.coordinates}
                rotation={`0 0 ${item.angle}`} width={item.width}
                height="0.01" color="black"
            />
        )
    })

    const vertexMaps = vertexes.map(item => {
        return <a-sphere key={item.coordinates.join('')} position={item.coordinates.join(' ')} radius="0.3" color="red"/>
    })
    return (
        <>
            {vertexMaps}
            {planeMaps}
        </>
    )
}

export default Graph;