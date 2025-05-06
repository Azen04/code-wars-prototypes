// 4 octet numbers seperated by '.' 

// split string by '.' 
// loop through values
// check for traling zeros on each value
// check if octect on each value

function isValidIP(str) {
    if (str.length < 7) {
        return false
    }

    let index = 0
    let zeroFinderIndex = 0

    let trailingZerosCount = 0

    let convertedNumber = ''

    const ipNumbers = str.split('.')
    let numberDigits = []

    while (index < ipNumbers.length) {
        numberDigits = ipNumbers[index].split('')

        while (zeroFinderIndex < numberDigits.length && numberDigits[zeroFinderIndex] == 0) {
            numberDigits[zeroFinderIndex] == 0 ? trailingZerosCount++ : trailingZerosCount
            zeroFinderIndex++
        }

        trailingZerosCount > 0 ? numberDigits.splice(0, trailingZerosCount) : trailingZerosCount

        convertedNumber = numberDigits.join('') * 1

        if (convertedNumber >= 0 && convertedNumber <= 255) {
            ipNumbers[index] = convertedNumber
        } else { return false }

        ipNumbers

        zeroFinderIndex = 0
        trailingZerosCount = 0
        index++
    }

    return true
}

isValidIP('001.02.03.04')