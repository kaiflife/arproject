import {zCoordinate} from "./arSettings";

const colors = [
    'green',
    'red',
    'blue',
    'yellow',
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
    {
        id: 0,
        coordinates: [-3, 2, zCoordinate],
        targets: [1,2,3,4]
    },
    {
        id: 1,
        coordinates: [3, 2, zCoordinate],
        targets: [0,2,4]
    },
    {
        id: 2,
        coordinates: [0, 4, zCoordinate],
        targets: [0,1]
    },
    {
        id: 3,
        coordinates: [2, 0, zCoordinate],
        targets: [0,1,4]
    },
    {
        id: 4,
        coordinates: [-2, 0, zCoordinate],
        targets: [0]
    }
];

export const triangleGraph = [
    {
        id: 0,
        coordinates: [-1, 1, zCoordinate],
        targets: [1]
    },
    {
        id: 1,
        coordinates: [1, 1, zCoordinate],
        targets: [],
    },
    {
        id: 2,
        coordinates: [0, 2, zCoordinate],
        targets: [0,1]
    }
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