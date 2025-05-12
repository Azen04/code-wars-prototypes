// create an array
// loop through an array
// start from end of array
// COMPLETED

// updates
// iterate from end until selected number is not a number
// iterated numbers will be pushed to an array
// once all numbers are pushed
// store array length  
// COMPLETED

// updates 2
// reverse array
// join array
// multiply by 1
// add 1

// updates 3
// convert to string and check if length changes 
// delete zero

function startFromEnd(str) {
    let index = str.length - 1
    let numberLength = 0

    const arrayConvertedStr = str.split('')
    const numbers = []

    let postConversionNumber = null

    while (index > -1) {
        console.log(str[index]);
        if (!isNaN(str[index])) {
            numbers.push(str[index])
        } else {
            break
        }
        index--
    }
    numberLength = numbers.length

    numbers.reverse()

    postConversionNumber = numbers.join() * 1 + 1
    console.log(postConversionNumber);

}

startFromEnd('fooooo9')

