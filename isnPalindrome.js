// reverse string
// change to array
// loop
// splice
// loops will equal half of length of string

function isPalindrome(string) {
    const letters = string.split('')

    let differenceFromEnd = 1

    for (let index = 0; index < (letters.length / 2); index++) {
        const character = letters[index];

        letters.splice(letters.indexOf(character), 1, letters[letters.length - differenceFromEnd])
        letters.splice(letters.length - differenceFromEnd, 1, character)

        differenceFromEnd++
    }

    return string == letters.join('') ? true : false

}


console.log(isPalindrome('shark'));
// console.log(isPalindrome('racecar'));
