// array

// loop 
// store value
// loop
// conditional

// conditional
// stop or continue

// solved

function getMajorityElement(array) {
    let majorityElement

    array.forEach((first, offset) => {
        let count = 0

        for (let index = (0 + offset); index < array.length; index++) {
            const second = array[index];

            first == second ? count++ : count

        }

        if (count > array.length / 2) {
            majorityElement = first
            return
        }
    });

    return majorityElement
}

const mixedArray = [42, "apple", "apple", 7, "apple", "apple", "apple", "banana", "apple", 13];

console.log(getMajorityElement(mixedArray));

