// given a string, create a grid that holds the string

// input: string
// output: grid of arrays 

function toMatrix(name) {

    const matrix = []
    let amount = 2
    let modifier = 2
    let nameIndex = 0

    while (name.length > amount) {

        amount *= modifier

        modifier++
        amount++
    }

    while (matrix.length < amount) {
        matrix.push([])

        while (matrix[matrix.length - 1].length < amount) {

            if (name.length - 1 != nameIndex) {
                matrix[matrix.length - 1].push(name[nameIndex])
            } else {
                matrix[matrix.length - 1].push('.')
            }

            nameIndex++
            // store index before loop ends
            // resume push of name letters when in next array

        }
    }
}



