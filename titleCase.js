// start of Title Case: Codewars Algo

// input: string with words to modify && string with words to avoid modifying
// output: modified string

// split string based on a unanimous seperator
// push words into their own respective arrays
// loop through the titleWordsArray and do the following checks
// if current word is not in minorWordsArray then select index 0 and change to uppercase letter if not already uppercase

// index to loop over words
// index to 
// an array for each string



function titleCase(title, minorWords) {

    let wordIndex = 0
    let letterIndex = 0
    let minorWordIndex = 0

    let isMinorWord = false

    const wordsArray = title.split(' ')
    const minorWordsArray = minorWords.split(' ')

    wordsArray
    minorWordsArray

    while (wordsArray.length > wordIndex) {
        while (wordsArray[wordIndex].length > letterIndex) {

            if (wordIndex > 0) {
                while (minorWordsArray.length > minorWordIndex) {

                    if (minorWordsArray[minorWordIndex] == wordsArray[wordIndex]) {
                        isMinorWord = true
                        break
                    }

                    minorWordIndex++
                }
            }

            if (isMinorWord) {
                isMinorWord = false
                break
            }

            // select word then make first  letter uppercase 
            // select other letters and make lowercase

            if (letterIndex == 0) {
                wordsArray[wordIndex][letterIndex] = wordsArray[wordIndex][letterIndex].toUpperCase()
                console.log(wordsArray[wordIndex][letterIndex] = wordsArray[wordIndex][letterIndex].toUpperCase());
                console.log(wordsArray[wordIndex]);

            } else {
                wordsArray[wordIndex][letterIndex] = wordsArray[wordIndex][letterIndex].toLowerCase()
            }

            letterIndex++
        }

        letterIndex = 0
        wordIndex++
    }

    return wordsArray
}

console.log(titleCase('how are you today', 'are you'));

