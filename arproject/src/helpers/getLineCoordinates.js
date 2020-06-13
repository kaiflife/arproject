import {create, all} from 'mathjs';
import {getColor, getRandomColor} from "../constants/graphs";

const config = {
    number: 'BigNumber',
    precision: 1
}

const math = create(all, config);

const calculateCoords = ({firstCoords, secondCoords}) => {
    const newCoordinates = secondCoords.map((item, index) => math.pow(math.subtract(item, firstCoords[index]), 2));
    const width = math.sqrt(newCoordinates.reduce((sum, current) => math.add(sum, current), 0));
    const middleCoords = secondCoords.map((item, index) => math.divide(math.add(item, firstCoords[index]), 2));
    const x = middleCoords[0];
    const y = middleCoords[1];
    const z = middleCoords[2];
    const coordinates = [x,y,z];
    const angle = Math.atan2(firstCoords[2] - secondCoords[2], secondCoords[0] - firstCoords[0]) * 180 / Math.PI;
    return {coordinates: coordinates.join(' '), width, angle};
}

const getLinesCoordsProps = coords => {
    const newCoordsProps = coords.map((item, index) => {
        return {
            connections: [],
            targets: item.targets.slice(),
            coordinates: item.coordinates.slice(),
            id: item.id,
            color: index === 0 ? getRandomColor() : '',
        }
    })
    let lineProps = [];
    newCoordsProps.forEach(firstItem => {
        firstItem.targets.forEach(targetId => {
            if(!firstItem.connections){
                firstItem.connections = [];
            }
            const secondItem = newCoordsProps.find(item => item.id === targetId);
            if(!secondItem.connections.some(id => id === firstItem.id)){
                lineProps.push(calculateCoords({
                    firstCoords: firstItem.coordinates,
                    secondCoords: secondItem.coordinates
                }));
                firstItem.connections.push(targetId);
                secondItem.connections.push(firstItem.id);
            }
        })
    });
    newCoordsProps.forEach(coordProps => {
        if(coordProps.color) {
            return;
        }
        const connectedItems = coordProps.connections.map(connectionId => {
            return newCoordsProps.find(item => item.id === connectionId);
        });
        const filteredColors = connectedItems.map(item => item.color);
        coordProps.color = getColor(filteredColors);
    })
    return {newCoordsProps, lineProps};
}

export default getLinesCoordsProps;