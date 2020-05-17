import {zCoordinate} from "./arSettings";

const colors = [
    'green',
    'red',
    'blue',
    'yellow',
    'orange',
    'deeppink',
    'deepskyblue',
    'chartreuse',
    'darkorange',
];

export const getRandomColor = (forFilteredColors = []) => {
    const filteredColors = !forFilteredColors.length ? colors :
        colors.filter(color => !forFilteredColors.some(filteredColor => color === filteredColor));
    return filteredColors[Math.floor(Math.random() * Math.floor(filteredColors.length))];
}

export const eulerGraph = [
    [-3, 2, zCoordinate],
    [3, 2, zCoordinate],
    [0, 4, zCoordinate],
    [2, 0, zCoordinate],
    [-2, 0, zCoordinate]
];

export const triangleGraph = [
    [-1, 1, zCoordinate],
    [1, 1, zCoordinate],
    [0, 2, zCoordinate],
];

export const regularGraph = [
    {
        id: 0,
        coordinates: [-2, 2, zCoordinate],
        targets: [1, 3],
    },
    {
        id: 1,
        coordinates: [2, 2, zCoordinate],
        targets: [0, 2],
    },
    {
        id: 2,
        coordinates: [2, 1, zCoordinate],
        targets: [0, 1, 3],
    },
    {
        id: 3,
        coordinates: [-2, 1, zCoordinate],
        targets: [0, 1, 2],
    },
];