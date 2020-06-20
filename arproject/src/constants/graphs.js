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

export const getColor = (forFilteredColors = []) => {
    const filteredColors = !forFilteredColors.length ? colors :
        colors.filter(color => !forFilteredColors.some(filteredColor => color === filteredColor));
    return filteredColors[0];
}

export const eulerGraph = [
    {
        id: 0,
        coordinates: [-1, 0, 0],
        targets: [1,2,3,4]
    },
    {
        id: 1,
        coordinates: [1, 0, 0],
        targets: [0,2,4]
    },
    {
        id: 2,
        coordinates: [0, 0, -0.5],
        targets: [0,1, 3, 4]
    },
    {
        id: 3,
        coordinates: [0.5, 0, 0.5],
        targets: [0,1,4]
    },
    {
        id: 4,
        coordinates: [-0.5, 0, 0.5],
        targets: [0,1]
    }
];

export const triangleGraph = [
    {
        id: 0,
        coordinates: [-0.5, 0, 0.25],
        targets: [1]
    },
    {
        id: 1,
        coordinates: [0, 0, -0.25],
        targets: [],
    },
    {
        id: 2,
        coordinates: [0.5, 0, 0.25],
        targets: [0,1]
    }
];

export const regularGraph = [
    {
        id: 0,
        coordinates: [-1.5, 0, 0.5],
        targets: [1, 3],
    },
    {
        id: 1,
        coordinates: [1.5, 0, 0.5],
        targets: [0, 2],
    },
    {
        id: 2,
        coordinates: [1.5, 0, -0.5],
        targets: [0, 1, 3],
    },
    {
        id: 3,
        coordinates: [-1.5, 0, -0.5],
        targets: [0, 1, 2],
    },
];

export const sixGraph = [
    {id: 0, coordinates: [-1, 0,  1], targets: [1, 3, 5]},
    {id: 1, coordinates: [ 1, 0,  1], targets: [2, 4]},
    {id: 2, coordinates: [-1, 0,  0], targets: [3, 5]},
    {id: 3, coordinates: [ 1, 0,  0], targets: [4]},
    {id: 4, coordinates: [-1, 0, -1], targets: [5]},
    {id: 5, coordinates: [ 1, 0, -1], targets: []},
];