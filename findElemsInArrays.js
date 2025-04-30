// create a function that checks for a specific value within 2 arrays and returns an array with the specified value if it exist in both arrays 

// input: 2 arrays of numbers
// output: single array with a number
// COMPLETED

// Updates
// check whether number is odd or even then check for match for wanted
// check if number is within a given range
// wanted will now equal a string that will equal either odd or even
// rng will be an added param: rng will be an array of 2 numbers
// COMPLETED

// Updates 2
// create 2 variables (offsetAIndex, offsetBIndex)
// when match is found on second array, loop through first array to find second occurance
// if second occurance is found, loop through second array to find second occurence 
// if found, push value to new array
// COMPLETED

// updates 3
// reset offsetIndexA && offsetIndexB after increases
// test for scalability and error handling 
// COMPLETED


function findNumber(arrA, arrB, rng, wanted) {
    const newArr = []
    let newArrLength = newArr.length

    let arrAIndex = 0
    let arrBIndex = 0

    let withinRange = null
    let oddOrEven = null

    let offsetIndexA = 1
    let offsetIndexB = 1

    let newArrIndex1 = 0
    let newArrIndex2 = 0

    let FullIterationsCounter = 0
    let lowestNumber = newArr[newArrIndex1] 

    while (arrA.length > arrAIndex) {

        withinRange = arrA[arrAIndex] >= rng[0] && arrA[arrAIndex] <= rng[1] ? true : false
        oddOrEven = arrA[arrAIndex] % 2 == 0 ? 'even' : 'odd'

        if (withinRange && oddOrEven == wanted) {

            while (arrB.length > arrBIndex) {

                if (arrB[arrBIndex] == arrA[arrAIndex]) {
                    while (arrA.length > arrAIndex + offsetIndexA) {

                        if (arrA[arrAIndex] == arrA[arrAIndex + offsetIndexA]) {
                            while (arrB.length > arrBIndex + offsetIndexB) {

                                if (arrB[arrBIndex] == arrB[arrBIndex + offsetIndexB]) {
                                    newArr.push(arrB[arrBIndex])
                                    break
                                }

                                offsetIndexB++
                            }
                        }

                        if (newArrLength != newArr.length) {
                            break
                        }

                        offsetIndexA++
                    }

                    offsetIndexA = 1
                    offsetIndexB = 1

                }
                if (newArrLength != newArr.length) {
                    newArrLength = newArr.length
                    break
                }
                arrBIndex++
            }
            arrBIndex = 0
        }
        arrAIndex++
    }

    while (newArrIndex1 < newArr.length) {
    lowestNumber = newArr[newArrIndex1]

    while (newArrIndex2 < newArr.length) {

        if (newArr[newArrIndex2] < newArr[newArrIndex1]) {
            lowestNumber = lowestNumber > newArr[newArrIndex2] ? newArr[newArrIndex2] : lowestNumber
        }

        newArrIndex2++
    }

    newArr[newArrIndex1] = newArr.splice(newArr.indexOf(lowestNumber), 1, newArr[newArrIndex1])

    newArrIndex2 = ++FullIterationsCounter
    newArrIndex1++

}
    return Array.from(new Set(newArr.flat()))

    // loop through both array
    // check if selected value is wanted value
    // if wanted then search other array for wanted value
    // if found then push wanted value to array 
    // return array
}

console.log(findNumber([3, 12, 6, 10, 9, 4, 20, 2, 7, 3, 14, 6, 8, 10, 2, 5, 18, 4, 3], [8, 7, 4, 15, 10, 3, 25, 6, 7, 1, 12, 4, 19, 5, 2, 10, 3, 6, 14], [2, 999], 'even'));
