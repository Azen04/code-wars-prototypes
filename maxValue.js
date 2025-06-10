// create a function with the following
// argument of array of numbers
// returns the highest number

// loop
// compare
// assign
// store maxValue

function getMaxValue(array) {
    let maxValue = 0

    for (const value of array) {
        maxValue = maxValue < value ? value : maxValue
    }

    return maxValue
}

const numbers = [10, 89, 7, 23, 56, 67, 34];

console.log(getMaxValue(numbers));




