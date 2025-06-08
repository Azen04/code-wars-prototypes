// find non duplicate

// loop
// conditional

// solved


function findNonDupe(array) {
    let soloNum
    let storedValue

    array.forEach((num, index) => {
        storedValue = array.splice(index, 1, null)[0]

        if (!array.includes(storedValue)) {
            soloNum = num
            return
        }
        array.splice(index, 1, num)
    });

    return soloNum
}

console.log(findNonDupe([3, 1, 2, 4, 6, 2, 3, 4, 1, 5, 5]));
