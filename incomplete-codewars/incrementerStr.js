// input: string
// output: new string

// check if string ends with numbers
// select numbers at end of string and increment the enumber
// if stirng does not end in numbers then append 1

// immediate checks
// start from end of string for number

function incrementStr(str) {
    let newString = str[str.length - 1] * 1 != NaN ? str + 1 : str

    return newString
}

// console.log(incrementStr('foo'));
