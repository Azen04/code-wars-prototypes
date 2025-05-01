// given a string, create a grid that holds the string
// rows and columns within the grid must be equal in length
// provided string must continue on the next array if their is not enough space in it's current array
// loops through string will equal array length  
// whenever all values within the string are pushed then push '.' for the remaining indexes

// input: string
// output: grid of arrays 

const matrixfy = str => {

    const matrix = []

    let square = 0 

    let baseNumber = 0
    let exponent = 2

    let strIndex = 0
    let lettersPushed = 0

    if (str.length == 0) {
      return 'name must be at least one letter'
    }

    while (str.length > square) {
        baseNumber++

        square = baseNumber ** exponent

    }

    while (matrix.length < baseNumber) {
        matrix.push([])

        while (matrix[matrix.length - 1].length < baseNumber) {

            if (str.length != lettersPushed) {
                matrix[matrix.length - 1].push(str[strIndex])
                lettersPushed++
            } else {
                matrix[matrix.length - 1].push('.')
            }

            strIndex++
        }
    }
    return matrix
}

console.log(matrixfy('a'));




