// create a 2d grid
// use 2d grid to draw shapes

// create a function with a number as an argument representing grid size

const grid = [];

function createGrid(size) {

    let index = 0

    while (grid.length < size) {
        grid.push([])
        
        while (grid[index].length < size) {
            grid[index].push(' ')
        }

        index++
    }

}

// use x and y to draw

function drawShape(x,y, char) {

    grid[y][x] = char
    
}

console.log(createGrid(6));
console.log(drawShape(3, 3, 'x'));
console.log(grid);




