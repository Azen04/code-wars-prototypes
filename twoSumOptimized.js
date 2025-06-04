// input: array
// output: integer

// loop

// ON HOLD


function sumOptimized(array, integer) {
    return array.filter((value,) => value < integer).reduce((first, second) => first += second)
}

console.log(sumOptimized([3, 8, 7, 2, 10, 5, 1], 15));
