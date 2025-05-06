// 4 octet numbers seperated by '.' 

// split string by '.' 
// loop through values
// check for traling zeros on each value
// check if octect on each value

// updates
// if trailing zero is found: return false
// check for non integers




function isValidIP(str) {
    if (str.length < 7) {
        return false
    }

    console.log(str);

    let index = 0
    let zeroFinderIndex = 0

    let convertedNumber = ''

    let octectCount

    const ipNumbers = str.split('.')
    let numberDigits = []

    while (index < ipNumbers.length) {
        numberDigits = ipNumbers[index].split('')

        if (numberDigits[0] == 0 && numberDigits.length == 1 || numberDigits[0] != 0) {
            while (zeroFinderIndex < numberDigits.length) {

                if (isNaN(numberDigits[zeroFinderIndex])) {
                    return false
                }

                zeroFinderIndex++
            }

        } else { return false }

        convertedNumber = numberDigits.join('') * 1

        if (convertedNumber >= 0 && convertedNumber <= 255) {
            octectCount++
        } else { return false }

        ipNumbers

        zeroFinderIndex = 0
        index++
    }

    return octectCount == 4 ? true : false
}

isValidIP('0.0.0.0')