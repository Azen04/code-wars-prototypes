// input: array
// output: array

// loop
// multiply all values after current i value
// return map

// solved

function allProducts(array) {

    const products = array.map((first, i) => {
        let product = 1

        for (let index = 0; index < array.length; index++) {
            if (index == i) { continue }

            const second = array[index];

            product *= second
        }

        return product
    })

    return products
}

const numbers = [1, 2, 3, 4, 5];

let numbers2 = [7, 2, 9, 4, 7];
let numbers3 = [6, 9, 2, 8, 1];

console.log(allProducts(numbers));
console.log(allProducts(numbers2));
console.log(allProducts(numbers3));
