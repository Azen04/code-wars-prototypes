// shift values to right based on passed number (k)
// takes in arrya

// solved 
function rotateArray(array, k) {
    console.log(array, 'before rotation');
    let direction

    if (k < 0) {
        k *= -1
        direction = 'left'
    } else {
        direction = 'right'
    }


    for (let index = 0; index < k; index++) {
        direction == 'left'
            ? array.push(array.shift())
            : array.unshift(array.pop())
    }

    console.log(array, 'after rotation');
    return array
}


let sortedArray = [3, 7, 12, 18, 24, 31, 45];
let randomDigit = -6;


console.log(rotateArray(sortedArray, randomDigit));
