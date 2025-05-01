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

    const wordsArray = title.split(' ')
    const minorWordsArray = minorWords.split(' ')

    wordsArray
    minorWordsArray

    while (wordsArray.length > wordIndex) {
        while (wordsArray[wordIndex].length > letterIndex) {

            
            
            letterIndex++
        }
        
        letterIndex = 0
        wordIndex++
    }
    
}