import React from "react";
import getLinesCoordsProps from "../helpers/getLineCoordinates";



const Graph = ({vertexes}) => {

    const formattedProps = getLinesCoordsProps(vertexes);
    const planeMaps = formattedProps.lineProps.map(item => {
        return (
            <a-plane
                key={`${item.coordinates}${item.angle}`}
                position={item.coordinates}
                rotation={`-45 ${item.angle} 0`} width={item.width}
                height="0.1" color="gray"
            />
        )
    })

    const vertexMaps = formattedProps.newCoordsProps.map(item => {
        return (
            <a-sphere
                key={item.id}
                position={item.coordinates.join(' ')}
                radius="0.3"
                color={item.color}
            />
        )
    })

    return (
        <>
            {vertexMaps}
            {planeMaps}
        </>
    )
}

export default Graph;