// input: array
// output: number

// ON HOLD
// NOTE: 

function getHighestProduct(array) {
    let product = 1
    let count = 0
    let highestUniqueNumber = 0
    let valueIndex = 0

    for (let index = 0; index < array.length; index++) {
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

            highestUniqueNumber = first < second
                && highestUniqueNumber < second
                ? second : highestUniqueNumber

        }

        // highestUniqueNumber should be different every time
        product *= highestUniqueNumber
        count++
    }

    return product
}

const randomArray = [3, 7, 12, 7, 12, 8, 0, 2, 6, 9];

console.log(getHighestProduct(randomArray));

