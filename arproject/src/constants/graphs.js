const colors = [
    'green', 'red', 'blue',
    'yellow', 'deeppink', 'deepskyblue',
    'chartreuse', 'darkorange',
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
    {id: 0, coordinates: [-1, 0, 0], targets: [1,2,3,4]},
    {id: 1, coordinates: [1, 0, 0], targets: [0,2,4]},
    {id: 2, coordinates: [0, 0, -0.5], targets: [0,1, 3, 4]},
    {id: 3, coordinates: [0.5, 0, 0.5], targets: [0,1,4]},
    {id: 4, coordinates: [-0.5, 0, 0.5], targets: [0,1]}
];
export const triangleGraph = [
    {id: 0, coordinates: [-0.5, 0, 0.25], targets: [1]},
    {id: 1, coordinates: [0, 0, -0.25], targets: []},
    {id: 2, coordinates: [0.5, 0, 0.25], targets: [0,1]}
];
export const regularGraph = [
    {id: 0, coordinates: [-1.5, 0, 0.5], targets: [1, 3]},
    {id: 1, coordinates: [1.5, 0, 0.5], targets: [0, 2]},
    {id: 2, coordinates: [1.5, 0, -0.5], targets: [0, 1, 3]},
    {id: 3, coordinates: [-1.5, 0, -0.5], targets: [0, 1, 2]},
];
export const sixGraph = [
    {id: 0, coordinates: [-1, 0,  0.5], targets: [1, 3, 5]},
    {id: 1, coordinates: [ 1, 0,  0.5], targets: [2, 4]},
    {id: 2, coordinates: [-1, 0,  0], targets: [3, 5]},
    {id: 3, coordinates: [ 1, 0,  0], targets: [4]},
    {id: 4, coordinates: [-1, 0, -0.5], targets: [5]},
    {id: 5, coordinates: [ 1, 0, -0.5], targets: []},
];

export const twentyFourGraph = [
    {id: 0, coordinates: [-1, 0,  0.5], targets: [1, 3, 5, 23, 14, 5]},
    {id: 1, coordinates: [ 1, 0,  0.5], targets: [2, 4]},
    {id: 2, coordinates: [-1, 0,  0], targets: [3, 5]},
    {id: 3, coordinates: [ 1, 0,  0], targets: [4]},
    {id: 4, coordinates: [-1, 0, -0.5], targets: [5]},
    {id: 5, coordinates: [ 1, 0, -0.5], targets: []},
    {id: 6, coordinates: [-1, 0,  0.5], targets: []},
    {id: 7, coordinates: [ 1, 0,  0.5], targets: []},
    {id: 8, coordinates: [-1, 0,  0], targets: []},
    {id: 9, coordinates: [ 1, 0,  0], targets: []},
    {id: 10, coordinates: [-1, 0, -0.5], targets: [9,11,12]},
    {id: 11, coordinates: [ 1, 0, -0.5], targets: []},
    {id: 12, coordinates: [-1, 0,  0.5], targets: []},
    {id: 13, coordinates: [ 1, 0,  0.5], targets: [20,19,0,1,2,3,4,5]},
    {id: 14, coordinates: [-1, 0,  0], targets: []},
    {id: 15, coordinates: [ 1, 0,  0], targets: []},
    {id: 16 , coordinates: [-1, 0, -0.5], targets: []},
    {id: 17, coordinates: [ 1, 0, -0.5], targets: [4, 11, 23,]},
    {id: 18, coordinates: [-1, 0,  0.5], targets: []},
    {id: 19, coordinates: [ 1, 0,  0.5], targets: []},
    {id: 20, coordinates: [-1, 0,  0], targets: []},
    {id: 21, coordinates: [ 1, 0,  0], targets: []},
    {id: 22, coordinates: [-1, 0, -0.5], targets: []},
    {id: 23, coordinates: [ 1, 0, -0.5], targets: []},
];