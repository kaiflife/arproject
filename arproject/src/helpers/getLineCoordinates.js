import {create, all} from 'mathjs';

const config = {
    number: 'BigNumber',
    precision: 1
}

const math = create(all, config);

const getLinesCoordinates = coords => {
    let anotherCoordinates = [];
    coords.forEach((firstCoords, firstIndex) => {
        const timedArray = (coords.slice(firstIndex+1, coords.length));
        timedArray.forEach(secondCoords => {
            const newCoordinates = secondCoords.map((item, index) => math.pow(math.subtract(item, firstCoords[index]), 2));
            const width = math.sqrt(newCoordinates.reduce((sum, current) => math.add(sum, current), 0));
            const middleCoords = secondCoords.map((item, index) => math.divide(math.add(item, firstCoords[index]), 2));
            const x = middleCoords[0];
            const y = middleCoords[1];
            const z = middleCoords[2];
            const coordinates = [x,y,z];
            const angle = Math.atan2(secondCoords[1] - firstCoords[1], secondCoords[0] - firstCoords[0]) * 180 / Math.PI;
            anotherCoordinates.push({coordinates: coordinates.join(' '), width, angle});
        })
    });
    return anotherCoordinates;
}

export default getLinesCoordinates;