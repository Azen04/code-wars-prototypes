// sort array of numbers from least to greatest
// COMPLETED

// input: unsorted array of numbers
// output: sorted array of numbers from least to greates

const pokemonCardsArray = [42, 7, 13, 89, 7, 3, 56, 21, 42, 10, 5, 89, 3];

let position = 0
let IterationIndex = 0

let FullIterationsCounter = 0
let lowestNumber = pokemonIds[position]

while (position < pokemonIds.length) {
    lowestNumber = pokemonIds[position]

    while (IterationIndex < pokemonIds.length) {

        if (pokemonIds[IterationIndex] < pokemonIds[position]) {
            lowestNumber = lowestNumber > pokemonIds[IterationIndex] ? pokemonIds[IterationIndex] : lowestNumber
        }

        IterationIndex++
    }

    pokemonIds[position] = pokemonIds.splice(pokemonIds.indexOf(lowestNumber), 1, pokemonIds[position])

    IterationIndex = ++FullIterationsCounter
    position++

}

console.log(pokemonIds.flat());