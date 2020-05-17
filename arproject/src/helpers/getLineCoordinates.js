import {create, all} from 'mathjs';

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
    const angle = Math.atan2(secondCoords[1] - firstCoords[1], secondCoords[0] - firstCoords[0]) * 180 / Math.PI;
    return {coordinates: coordinates.join(' '), width, angle};
}

const getLinesCoordinates = coords => {
    const newCoords = coords.map(item => {
        return {connections: [], targets: item.targets.slice(), coordinates: item.coordinates.slice(), id: item.id}
    })
    let lineProps = [];
    newCoords.forEach(firstItem => {
        firstItem.targets.forEach(targetId => {
            if(!firstItem.connections){
                firstItem.connections = [];
            }
            const secondItem = newCoords.find(item => item.id === targetId);
            if(!secondItem.connections.some(id => id === firstItem.id)){
                lineProps.push(calculateCoords({firstCoords: firstItem.coordinates, secondCoords: secondItem.coordinates}));
                firstItem.connections.push(targetId);
            }
        })
    });
    return lineProps;
}

export default getLinesCoordinates;