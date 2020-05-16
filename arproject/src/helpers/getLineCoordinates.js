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
            const counter = firstCoords.slice(0,2).reduce((sum, current, index) => math.add(sum, math.multiply(current, secondCoords[index])), 0);
            const bottomFirst = math.sqrt(firstCoords.slice(0,2).reduce((sum, current) => math.add(sum, math.pow(current, 2)), 0));
            const bottomSecond = math.sqrt(secondCoords.slice(0,2).reduce((sum, current) => math.add(sum, math.pow(current, 2)), 0));
            const delimiter = math.multiply(bottomFirst, bottomSecond.im || bottomSecond);
            const isOpposite = firstCoords[0] > 0;
            const isOppositeVertical = firstCoords[1] > 1.5;
            const isPerpendicular = firstCoords[0] === secondCoords[0];
            const isParallel = firstCoords[1] === secondCoords[1];
            const vectorAngle = math.divide(counter, delimiter);
            const piAngle = math.divide(180, Math.PI);
            const angle = isParallel ? 0 : isPerpendicular ? 90 : isOppositeVertical ?
                math.add(math.multiply(math.sin(vectorAngle), piAngle), 1.5):
                math.add(math.multiply(math.cos(vectorAngle), piAngle), 1.5);
            anotherCoordinates.push({coordinates: coordinates.join(' '), width, angle: isOpposite ? -angle : angle});
        })
    });
    return anotherCoordinates;
}

export default getLinesCoordinates;