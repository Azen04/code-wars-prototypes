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


function findNumber(arrA, arrB, rng, wanted) {
    let targetValues = []
    let arrAIndex = 0
    let arrBIndex = 0

    let withinRange = null
    let oddOrEven = null

    let offsetIndexA = 1
    let offsetIndexB = 1

    while (arrA.length > arrAIndex) {

        withinRange = arrA[arrAIndex] >= rng[0] && arrA[arrAIndex] <= rng[1] ? true : false
        oddOrEven = arrA[arrAIndex] % 2 == 0 ? 'even' : 'odd'

        if (withinRange && oddOrEven == wanted) {

            console.log(arrA[arrAIndex]);

            while (arrB.length > arrBIndex) {
                console.log(arrB[arrBIndex]);

                if (arrB[arrBIndex] == arrA[arrAIndex]) {
                console.log(arrA.length, arrAIndex + offsetIndexA)
                    while (arrA.length > arrAIndex + offsetIndexA) {
                        console.log(arrB[arrBIndex]);
 
                        if (arrA[arrAIndex] == arrA[arrAIndex + offsetIndexA]) {
                            while (arrB.length > arrBIndex + offsetIndexB) {

                                if (arrB[arrBIndex] == arrB[arrBIndex + offsetIndexB]) {
                                    targetValues.push(arrB[arrBIndex])
                                }
                                offsetIndexB++
                            }
                        }

                        offsetIndexA++
                    }

                } else if (arrAIndex == arrB.length - 1) {
                    return targetValues
                }
                arrBIndex++
            }
        }
        arrAIndex++
    }

    return targetValues

    // loop through both array
    // check if selected value is wanted value
    // if wanted then search other array for wanted value
    // if found then push wanted value to array 
    // return array
}

console.log(findNumber([2, 4, 7, 7, 5], [12, 7, 435, 7, 4], [2, 7], 'odd'));
