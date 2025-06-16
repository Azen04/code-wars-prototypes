// loop
// array filter with includes

// SOLVED

const getMatchingElements = (array1, array2) => array1.filter((value) => array2.includes(value))

const array1a = [1, 2, 3, 4, 5];
const array1b = [3, 4, 5, 6, 7];

const array2a = ['apple', 'banana', 'cherry'];
const array2b = ['banana', 'dragonfruit', 'apple'];

const array3a = [true, false, null, undefined];
const array3b = [false, undefined, 0];

console.log(getMatchingElements(array1a, array1b));
console.log(getMatchingElements(array2a, array2b));
console.log(getMatchingElements(array3a, array3b));

