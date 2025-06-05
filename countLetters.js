// string
// object

// solved

function createDictionary(string) {
    const dictionary = {}
    const registered = []

    for (const char of string) {

        if (!registered.includes(char)) {
            registered.push(char)
            dictionary[char] = 0
            console.log(char, 'is now SET');
        }

        dictionary[char]++
    }

    return dictionary
}

let sentence1 = "The sun dipped ";
let sentence2 = "She opened the old book and found a faded photograph tucked between the pages.";
let sentence3 = "After weeks of preparation, the team finally launched their project with great success.";


console.log(createDictionary(sentence1));
// console.log(createDictionary(sentence2));
// console.log(createDictionary(sentence3));
