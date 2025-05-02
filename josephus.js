// use an array to represent a circle. values in array will be selected based on passed in value, should return a new array,

// input: array && number value
// output: array

// iterate array
// iteration won't stop until array is empty
// how far we count until we splice will depend on k

//  create a variable to keep track of index 
//  k will determine count
//  create a variable that will store difference between k and array length

function josephus(items, k) {
    const newArr = []
    let index = 0
    let counted = 0
    let leftToBeCounted = 0
    let toBeCounted = k - 1

    while (items.length > 0) {
        while (counted < toBeCounted) {
            index++
            counted++

            if (index >= items.length) {


                leftToBeCounted = toBeCounted - counted
                if (leftToBeCounted > 1) {
                    index = 0 + leftToBeCounted - 1
                } else { index = 0 }
            }
        }
        counted = 0
        newArr.push(items.splice(index, 1))
    }
    return newArr.flat()
}

console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
