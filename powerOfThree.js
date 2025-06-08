// SOLVED (maybe)

function isPowerOftThree(n) {
    // loop
    // cube base 
    // conditional
    // increase base

    let result = null

    for (let base = 1; result != n; base++) {
        result = null
        result = base ** 3

        if (result > n) return false
    }

    return true
}

console.log(isPowerOftThree(27));
