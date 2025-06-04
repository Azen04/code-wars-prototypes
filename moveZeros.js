// move zeros to end 
// maintain non zeros order

// input: array
// output: array

// loop
// if zero
// splice
// move to end
// check same spot for zero


function appendZeros(array) {
    const zeroCount = array.filter((value) => value == 0).length

    array.forEach(function (value, index,) {
        for (let index2 = 0; this[index] == 0 && index2 != zeroCount; index2++) {
            this.push(this.splice(index, 1)[0])
        }
    }, array);

    return array
}

array1 = [5, 0, 3, 7, 0, 2, 9, 0, 1, 4]
array2 = [0, 8, 0, 0, 6, 3, 0, 5, 2, 7]
array3 = [1, 0, 0, 4, 6, 0, 8, 0, 3, 9]

// console.log(appendZeros(array1));
// console.log(appendZeros(array2));
// console.log(appendZeros(array3));