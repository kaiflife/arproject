import React, {useEffect} from "react";
import getLinesCoordsProps from "../helpers/getLineCoordinates";

const Graph = ({vertexes, graphName}) => {
    useEffect(() => {
        const finishDate = new Date();
        console.log(
            graphName, 'Начало алгоритма: ',
            0,
            ' Конец алгоритма: ',
            finishDate.getMilliseconds(), ' миллисекунд'
        );
    }, []);
    const formattedProps = getLinesCoordsProps(vertexes);
    const planeMaps = formattedProps.lineProps.map(item => {
        return (
            <a-plane
                key={`${item.coordinates}${item.angle}`}
                position={item.coordinates}
                rotation={`-45 ${item.angle} 0`} width={item.width}
                height="0.05" color="gray"
            />
        )
    })

    const vertexMaps = formattedProps.newCoordsProps.map(item => {
        return (
            <a-box
                key={item.id}
                position={item.coordinates.join(' ')}
                depth="0.2"
                opacity="0.9"
                width="0.3"
                height="0.3"
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