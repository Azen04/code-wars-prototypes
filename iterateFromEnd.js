// create an array
// loop through an array
// start from end of array
// COMPLETED

function startFromEnd(array) {
    let index = array.length - 1

    while (index > -1) {
        console.log(array[index]);

        index--
    }
}

startFromEnd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

