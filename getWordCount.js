// loop through grammatiically correct string
// track word count
// increase track count when whitespace is found
 
const getWordCount = (string) => {
    let index = 0
    let wordCount = 0;
    while (index < string.length) {
        string[index] == ' ' ? wordCount++ : console.log(string[index]);
        index++
    }
    return string.length == 0 ? 0 : ++wordCount
}

console.log(getWordCount(''));


