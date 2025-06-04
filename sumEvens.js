// loop
// get odds 
// sum odds

// loop
// get evens
// sum evens

// input: array
// output: numbers
function getSum(array) {
    const sumsArray = [0, 0]

    // const sums = {
    //     evens: null,
    //     odds: 
    // }


    // let oddsSum = 0
    // let evensSum = 0

    array.forEach(number => {
        number % 2 == 0 ? sumsArray[0] += number : sumsArray[1] += number
    });

    // array.forEach(number => {
    //     number % 2 == 0 ? sums.evens += number : sums.odds += number
    // });

    // array.forEach(number => {
    //     number % 2 == 0 ? evensSum += number : oddsSum += number
    // });


    // sumsArray.push(oddsSum, evensSum)

    // const evens = array.filter(number => number % 2 == 0)
    // const evensSum = evens.reduce((first, second) => first += second)

    // const odds = array.filter(number => number % 2 > 0)
    // const oddSums = odds.reduce((first, second) => first += second)

    // sumsArray.push(evensSum)
    // sumsArray.push(oddSums)

    return sumsArray
}

const mixed_array = [2, 7, 4, 9, 6, 1, 8, 3, 0, 5]

console.log(getSum(mixed_array));
