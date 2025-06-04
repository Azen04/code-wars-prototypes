// check last val in arr1 
// check first val in arr2
// conditionally merge arrays 

// NOTE: the problem has to do with duplicate values within the worked on array
// ON HOLD

function mergeSortedArrays(arr1, arr2) {
    // let mergedArray = arr1[arr1.length - 1] < arr2[0] ? arr1.concat(arr2)
    //     : arr2[arr2.length - 1] < arr1[0] ? arr2.concat(arr1)
    //         : null

    // if (mergedArray != null) { return mergedArray }

    mergedArray = arr1.concat(arr2)

    mergedArray.forEach(function (firstValue, fullIndex) {
        let lowerNumber = firstValue

        for (let index = (0 + fullIndex); index < mergedArray.length; index++) {
            const secondValue = mergedArray[index];

            lowerNumber = firstValue >= secondValue
                && lowerNumber >= secondValue
                ? secondValue : lowerNumber
        }

        mergedArray.splice(mergedArray.indexOf(lowerNumber), 1, firstValue)
        mergedArray.splice(fullIndex, 1, lowerNumber)
        // return lowerNumber
    });

    return mergedArray
}

array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
array2 = [0, 0, 2, 3, 5, 5, 6, 7, 8, 10]
// array1 = [3, 7, 1, 9, 4, 0, 8, 6, 5, 2]
// array2 = [12, 15, 18, 11, 14, 10, 13, 16, 17, 19]

array3 = [1, 2, 4, 4, 5, 6, 7, 8, 9, 11]
array4 = [0, 1, 1, 2, 3, 3, 4, 5, 6, 7]
array5 = [2, 3, 5, 6, 6, 7, 8, 9, 10, 12]
array6 = [0, 1, 2, 2, 4, 5, 6, 7, 9, 10]

console.log(mergeSortedArrays(array1, array2));
// console.log(mergeSortedArrays(array3, array4));
// console.log(mergeSortedArrays(array5, array6));
