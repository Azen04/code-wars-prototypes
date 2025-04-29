// create a function that checks for a specific value within 2 arrays and returns an array with the specified value if it exist in both arrays 

// input: 2 arrays of numbers
// output: single array with a number

function findNumber(arrA, arrB, wanted) {
    let targetValues = []
    let arrAIndex = 0 
    let arrBIndex = 0

    while (arrA.length > arrAIndex) {
        if (arrA[arrAIndex] == wanted) {

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

console.log(findNumber([2,4,567,6,5], [12,234,435,34,4], 4));
