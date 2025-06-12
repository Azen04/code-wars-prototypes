// create a closure that updates the auction based on whether its the current bid is higher then the highest bid

function bidAmount() {

    let highestAmount = 0

    function updateHighestBid(amount) {

        highestAmount = amount > highestAmount ? amount : highestAmount

        return highestAmount
    }

    return updateHighestBid
}

const getHighestBid = bidAmount()

console.log(getHighestBid(7));
console.log(getHighestBid(3));
console.log(getHighestBid(10));


// count

function outer() {
    let count = 0

    function inner() {
        return ++count
    }

    return inner
}

const plusOne = outer()

console.log(plusOne());
console.log(plusOne());
console.log(plusOne());
console.log(plusOne());
console.log(plusOne());
console.log(plusOne());

// MEMOIZATION

function bidAmount(amount) {

    let highestAmount = 0
    const result = updateHighestBid(amount)

    function updateHighestBid(amount) {

        highestAmount = amount > highestAmount ? amount : highestAmount

        return highestAmount
    }


    return updateHighestBid
}


console.log(getHighestBid(7));
console.log(getHighestBid(3));
console.log(getHighestBid(10));
