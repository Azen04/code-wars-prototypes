// string
// string

// getLongestWord

// SOLVED
// POST SOLUTION NOTES
// REFACTOR & IMPLEMENT REGEX SOLUTION

function getLongestWord(string) {
    const words = string.split(' ')
    let longestWord = ''

    words.forEach(first => {
        for (let second of words) {

            switch (true) {
                case second.endsWith(','): second = second.slice(0, second.length - 1); break;
                case second.endsWith('.'): second = second.slice(0, second.length - 1); break;
                case second.endsWith('?'): second = second.slice(0, second.length - 1); break;
                case second.endsWith('!'): second = second.slice(0, second.length - 1); break;

                default:
                    break;
            }

            longestWord = first.length < second.length
                && longestWord.length < second.length
                ? second : longestWord
        }
    });

    return longestWord
}

let sentence1 = "The sun dipped below the horizon, painting the sky with hues of orange and pink.";
let sentence2 = "She opened the old book and found a faded photograph tucked between the pages.";
let sentence3 = "After weeks of preparation, the team finally launched their project with great success.";


console.log(getLongestWord(sentence1));
console.log(getLongestWord(sentence2));
console.log(getLongestWord(sentence3));
