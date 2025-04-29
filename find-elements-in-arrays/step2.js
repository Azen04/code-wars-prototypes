// create a function that checks for a specific value within 2 arrays and returns an array with the specified value if it exist in both arrays 

// input: 2 arrays of numbers
// output: single array with a number
// COMPLETED

// updates
// check whether number is odd or even then check for match for wanted
// check if number is within a given range
// wanted will now equal a string that will equal either odd or even
// rng will be an added param: rng will be an array of 2 numbers

function findNumber(arrA, arrB, rng, wanted) {
    let targetValues = []
    let arrAIndex = 0 
    let arrBIndex = 0

    let withinRange = null
    let oddOrEven = null


    while (arrA.length > arrAIndex) {

        withinRange = arrA[arrAIndex] >= rng[0] && arrA[arrAIndex] <= rng[1] ? true : false 
        oddOrEven = arrA[arrAIndex] % 2 == 0 ? 'even' : 'odd' 

        if (withinRange && oddOrEven == wanted) {
            
            console.log(withinRange, oddOrEven, wanted);

            while (arrB.length > arrBIndex) {
                if (arrB[arrBIndex] == wanted) {
                    targetValues.push(arrB[arrBIndex])
                    return targetValues
                } else if (arrBIndex == arrB.length - 1) {
                    return targetValues
                } 
                arrBIndex++
            }
        } 
        arrAIndex++
    }

    // loop through both array
        // check if selected value is wanted value
        // if wanted then search other array for wanted value
        // if found then push wanted value to array 
        // return array
}

console.log(findNumber([2,4,567,7,5], [12,7,435,3,4], [2,7], 'even'));
