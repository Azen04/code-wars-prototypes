// input: array
// output: integer

// loop

// ON HOLD


function sumOptimized(array, integer) {
    const numbers = {
        firstIndex: null,
        secondIndex: null
    }

    for (const value of array) {
        let difference = value < integer ? integer - value : null

        if (array.includes(difference)) {
            numbers.firstIndex = array.indexOf(value)
            numbers.secondIndex = array.indexOf(difference)
            break
        }
    }

    return numbers
}

// const array1 = [4, 7, 2, 9, 1];
// const target1 = 10; // 9 + 1

const array1 = [3, 11, 7, 9, 9, 6];
const target1 = 15; // 9 + 6

// const array2 = [5, 3, 6, 11, 4];
// const target2 = 9; // 5 + 4

// const array3 = [8, 13, 2, 6, 7];
// const target3 = 15; // 8 + 7

console.log(sumOptimized(array1, target1));
// console.log(sumOptimized(array2, target2));
// console.log(sumOptimized(array3, target3));
