// pointer
// finder
// storage
// recorded

const recordedValues = [];
const recordedOccurences = [];
let pointer = 0;
let finder = 0;
let finderCycles = 0;
let valueToMatch = null;
let valueOccurences = 0;
let masterLoop = 0
let highestNumber = 0;

while (pointer < collection.length) {

    !recordedValues.includes(collection[pointer]) ? recordedValues.push(collection[pointer]) : console.log('something is not working the way you want it to');

    pointer++
}

pointer = 0

while (masterLoop < recordedValues.length) {

    valueOccurences = 0

    while (finder < collection.length) {

        recordedValues[pointer] == collection[finder] ? valueOccurences++ : console.log(collection[finder]);

        finder++
    }

    recordedOccurences.push(valueOccurences)

    pointer = ++finderCycles
    finder = ++finderCycles
    masterLoop++

}

pointer = 0
finder = 0

while (pointer < recordedOccurences.length) {

    while (finder < recordedOccurences.length) {

        if (recordedOccurences[pointer] < recordedOccurences[finder]) {
            highestNumber = highestNumber < recordedOccurences[finder] ? recordedOccurences[finder] : highestNumber
        }

        finder++
    }
pointer++
}

return highestNumber

console.log(recordedValues, recordedOccurences);

