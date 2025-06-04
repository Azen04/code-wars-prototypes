// input: string
// output: integer

// convert string to array
// loop 
// filter for vowels
// get lengta of filter array

function getVowelCount(string) {
    const phonemes = [['a', 'e', 'i', 'o', 'u'], ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
        'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']]

    const counts = []

    phonemes.forEach((array) => {
        let count = 0

        for (const char of string) {
            array.includes(char) ? count++ : count
        }

        counts.push(count)
    })

    return counts
}

let sentence = "Education is the key to unlocking a brighter future.";

console.log(getVowelCount(sentence));
