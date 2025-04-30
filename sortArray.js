// sort array of numbers from least to greatest
// COMPLETED

// input: unsorted array of numbers
// output: sorted array of numbers from least to greates

const newArr = [42, 7, 13, 89, 7, 3, 56, 21, 42, 10, 5, 89, 3];

let position = 0
let IterationIndex = 0

let FullIterationsCounter = 0
let lowestNumber = newArr[position]

while (position < newArr.length) {
    lowestNumber = newArr[position]

    while (IterationIndex < newArr.length) {

        if (newArr[IterationIndex] < newArr[position]) {
            lowestNumber = lowestNumber > newArr[IterationIndex] ? newArr[IterationIndex] : lowestNumber
        }

        IterationIndex++
    }

    newArr[position] = newArr.splice(newArr.indexOf(lowestNumber), 1, newArr[position])

    IterationIndex = ++FullIterationsCounter
    position++

}

console.log(newArr.flat());