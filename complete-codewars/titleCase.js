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

    let wordLetters = []

    let wordIndex = 0
    let letterIndex = 0
    let minorWordIndex = 0

    let titleCasedWord = null

    let isMinorWord = false

    const wordsArray = title.split(' ')
    const minorWordsArray = minorWords ? minorWords.split(' ') : false

    while (wordsArray.length > wordIndex) {
        while (wordsArray[wordIndex].length > letterIndex) {

            if (wordIndex > 0) {
                while (minorWordsArray.length > minorWordIndex) {

                    if (minorWordsArray[minorWordIndex].toLowerCase() == wordsArray[wordIndex].toLowerCase()) {
                        wordsArray[wordIndex] = wordsArray[wordIndex].toLowerCase()
                        isMinorWord = true
                        break
                    }

                    minorWordIndex++
                }
                minorWordIndex = 0
            }

            if (isMinorWord) {
                isMinorWord = false
                break
            }

            if (letterIndex == 0) {
                wordLetters = wordsArray[wordIndex].split('')
                wordLetters[letterIndex] = wordLetters[letterIndex].toUpperCase()
                titleCasedWord = wordLetters.join('')
                wordsArray[wordIndex] = titleCasedWord
                wordLetters
                titleCasedWord
            } else {
                wordLetters = wordsArray[wordIndex].split('')
                wordLetters[letterIndex] = wordLetters[letterIndex].toLowerCase()
                titleCasedWord = wordLetters.join('')
                wordsArray[wordIndex] = titleCasedWord
                wordLetters
                titleCasedWord
            }

            letterIndex++
        }

        letterIndex = 0
        wordIndex++
    }

    return wordsArray.join(' ')
}

console.log(titleCase('how are you today', 'ARE YOU'));

