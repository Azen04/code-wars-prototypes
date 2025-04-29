// get sum of digits without changing number to string
let number = 78236

console.log(Math.floor(number))
console.log(number % 10)

// get sum of digits, handles negatives
const sumDigits = number => {
    let index = 0;
    let sum = 0;
    number < 0 ? number *= -1 : number * 1;
    number += '';
    while (index < number.length) {
        sum += number[index] *= 1;
        index++;
    }
    return sum;
}

console.log(sumDigits(12672));






