// sort array of numbers from least to greatest

// input: unsorted array of numbers
// output: sorted array of numbers from least to greates


const arrC = [42, 7, 13, 89, 7, 3, 56, 21, 42, 10, 5, 89, 3];
// declare array of unsorted integers 
let position = 0// declare let variable with value 0
let FullIterationsCounter = 0// declare let variable with value 0
let IterationIndex = 0// declare let variable with value 0
let occurances = 0
let lowestNumber = arrC[position]// declare let variable with value of type 'number

while (position < arrC.length) {
    lowestNumber = arrC[position]

    while (IterationIndex < arrC.length) {

        if (arrC[IterationIndex] < arrC[position]) {
            lowestNumber = lowestNumber > arrC[IterationIndex] ? arrC[IterationIndex] : lowestNumber
        }

        IterationIndex++
    }

    arrC[position] = arrC.splice(arrC.indexOf(lowestNumber), 1, arrC[position])

    IterationIndex = ++FullIterationsCounter
    position++

}

console.log(arrC.flat());


// check for multiple occurances of a specific value

const arrA = [12, 7, 45, 33, 89, 21, 7, 58, 90, 3];
const arrB = [7, 3, 7, 89, 74, 12, 99, 21, 5, 18];
const arrC = []
let numberType = null;
let withinRange = null;
let lookFor = 0;
let locater = 0;
let timesOcurred = 0;
let locaterCycles = 0
let occursMoreThanOnce = null

// immediate checks

while (lookFor < arrA.length) {

    numberType = arrA[lookFor] % 2 == 0 ? 'even' : 'odd'
    withinRange = arrA[lookFor] >= rng[0] && arrA[lookFor] <= rng[1] ? true : false

    if (numberType == wanted && withinRange) {

        while (locater < arrA.length) {

            timesOcurred = arrA[lookFor] == arrA[locater] ? ++timesOcurred : timesOcurred

            if (timesOcurred > 1) {
                occursMoreThanOnce = true
                break
            } else if (locater == arrA.length - 1) {
                occursMoreThanOnce = false
            }

            locater++
        }

        locater = locaterCycles

        if (occursMoreThanOnce) {

            while (locater < arrB.length) {

                timesOcurred = arrA[lookFor] == arrB[locater] ? ++timesOcurred : timesOcurred

                if (timesOcurred > 3) {
                    occursMoreThanOnce = true
                    break
                } else if (locater == arrB.length - 1) {
                    occursMoreThanOnce = false
                }

                locater++
            }

        }

        if (occursMoreThanOnce) {

            arrC.push(arrA[lookFor])
        }

        timesOcurred = 0
        occursMoreThanOnce = null
        locater = locaterCycles

    }

    numberType = arrB[lookFor] % 2 == 0 ? 'even' : 'odd'
    withinRange = arrB[lookFor] >= rng[0] && arrB[lookFor] <= rng[1] ? true : false

    if (numberType == wanted && withinRange) {

        while (locater < arrB.length) {

            timesOcurred = arrB[lookFor] == arrB[locater] ? ++timesOcurred : timesOcurred

            if (timesOcurred > 1) {
                occursMoreThanOnce = true
                break
            } else if (locater == arrB.length - 1) {
                occursMoreThanOnce = false
            }

            locater++
        }

        locater = locaterCycles

        if (occursMoreThanOnce) {

            while (locater < arrB.length) {

                timesOcurred = arrB[lookFor] == arrA[locater] ? ++timesOcurred : timesOcurred

                if (timesOcurred > 3) {
                    occursMoreThanOnce = true
                    break
                } else if (locater == arrB.length - 1) {
                    occursMoreThanOnce = false
                }

                locater++
            }

        }

        if (occursMoreThanOnce) {

            arrC.push(arrB[lookFor])
        }

    }

    timesOcurred = 0
    occursMoreThanOnce = null
    locater = ++locaterCycles
    lookFor++

}

arrC

