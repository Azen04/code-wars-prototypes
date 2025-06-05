// extract a string from a string
// check if any repeat
// no repeat: get length
// yes repeat: invalid

// loop
// check registered
// 

// solved???
// NOTE: should be refactored


function longestNonRepeatingSubString(string) {
    let registered = []
    let startIndex = 0
    let longestSubstring = ''
    let substring = ''

    for (let index = 0; index < string.length; index++) {
        const value = string[index];

        if (registered.includes(value) || index == string.length - 1) {
            substring = string.substring(startIndex, index)

            if (index == string.length - 1) {
                substring += string[index]
            }
            longestSubstring = longestSubstring.length < substring.length ? substring : longestSubstring
            startIndex = index
            registered = []
            registered.push(string[index])
        } else {
            registered.push(value)
        }

    }

    return longestSubstring

}

// string1 = "aekrmnbvqazwlpekx"

string1 = "I saw a really happy puppy running across the street"
string2 = "The coffee spilled on my wool sweater during the meeting"
string3 = "Balloons floated above the buzzing crowd at the fair"

console.log(longestNonRepeatingSubString(string1));
console.log(longestNonRepeatingSubString(string2));
console.log(longestNonRepeatingSubString(string3));
