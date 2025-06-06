// input: array
// output: number

// ON HOLD
// NOTE: 
// solved
// POST SOLUTION NOTE: should be refactored


function getHighestProduct(array) {
    let product = 1
    let count = 0
    let highestUniqueNumber = 0
    let valueIndex = 0

    for (let index = (0 - count); index < array.length; index++) {
        const first = array[index];

        if (count == 2) {
            break
        }

        for (let index2 = (0 + index); index2 < array.length; index2++) {
            const second = array[index2];

            console.log('before splice', array.length);

            if (array.includes(array.splice(index2, 1, null)[0])) {
                array.splice(index2, 1, second)
                console.log('SPLICED', array);
                continue
            }

            array.splice(index2, 1, second)

            console.log('after splice', array.length);

            if (first < second && highestUniqueNumber < second) {
                valueIndex = index2
                highestUniqueNumber = second
            }

        }
        array.splice(valueIndex, 1)
        product *= highestUniqueNumber
        highestUniqueNumber = 0
        count++
    }

    return product
}

const randomArray = [3, 7, 12, 7, 12, 6, 0, 2, 8, 9];

console.log(getHighestProduct(randomArray));

