// input: array && callback

// solved
// post solution note
// CUSTOM FILTER FUNCTIONS/CB

const isOdd = number => {
    return number % 2 > 0 ? true : false
}

function filterArray(array, cb, startIndex) {
    const oddNumbers = []

    for (let index = startIndex; index < array.length; index++) {
        const number = array[index];
        cb(number) ? oddNumbers.push(number) : number
    }

    return oddNumbers
}

let sortedArray = [3, 7, 12, 18, 24, 31, 45];

console.log(filterArray(sortedArray, isOdd, 1));
