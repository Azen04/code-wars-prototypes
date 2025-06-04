// remove duplicates
// SOLVED

function removeDuplicates(array) {
    return new Set(array)
}

array1 = [1, "apple", 2, "banana", 1, "apple"]
array2 = ["dog", 5, "cat", 5, "dog", "cat"]
array3 = [3, "x", "y", 3, "x", "y"]

console.log(removeDuplicates(array1));
console.log(removeDuplicates(array2));
console.log(removeDuplicates(array3));
