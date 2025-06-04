// given an array of numbers
// find missing number

// solved

function getMissingNumber(array) {

    for (const value of array) {
        if (!array.includes(value + 1)) {
            console.log(`missing number is ${value + 1}`)
            return value + 1
        }
    }
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15];
let numbers1 = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12];
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18];



getMissingNumber(numbers)
getMissingNumber(numbers1)
getMissingNumber(numbers2)
