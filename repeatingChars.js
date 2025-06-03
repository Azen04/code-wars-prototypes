// return first non-repeating charactero

// create function that does the following
// takes a string 
// loop
// extract value from string  
// check if string includes extracted value
// if included skipp all other values  and return extracted value

// input: string
// output: string

function getFirstRepeatingChar(string) {
    const repeatingValues = []
    let newString = string

    for (let index = 0; index < string.length; index++) {
        const char = string[index];

        newString = newString.replace(char, 0)

        if (!newString.includes(char) && !repeatingValues.includes(char)) {
            return char
        } else {
            repeatingValues.push(char)
        }
    }

    return null
}


// console.log(getFirstRepeatingChar('about'));
// console.log(getFirstRepeatingChar('bbbba'));
// console.log(getFirstRepeatingChar('deeded'));


