
// Find new index for number that needs to be inserted inside sorted array
const findNewIndex = (sortedArray, unsortedNumber) => {
    for(let i = sortedArray.length -1;  i >= 0; i--){
        if(sortedArray[i] < unsortedNumber && i >= 0){
            // return first instance where lower number is found, and put it in the index before it
            return (i + 1)
        } 
    }
    // if the number should be added to beggining of the array
    return 0
}

// inserting the number in proper place in the sorted array
const insertIntoSortedArray = (sortedArray, unsortedNumber) =>{
    sortedArray.splice(findNewIndex(sortedArray, unsortedNumber), 0, unsortedNumber)
}

// Check if the number can be added on the beggining of the sorted array or if it needs to be compared with each of them to find a proper place
const addToSorted = (sortedArray, unsortedArrayNumber) => {
    if(sortedArray[sortedArray.length -1] < unsortedArrayNumber){
        sortedArray.push(unsortedArrayNumber)
    } else {
        insertIntoSortedArray(sortedArray, unsortedArrayNumber)
    }
}

// Whole sort
const insertSort = (array) => {
    let sortedArray = [];
    sortedArray.push(array.shift());
    let unsortedArray = array;
    // console.log(sortedArray)
    // console.log(unsortedArray)

    unsortedArray.forEach(unsortedArrayNumber=> {
        addToSorted(sortedArray, unsortedArrayNumber)
    })

    return sortedArray

}

console.log(insertSort([12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]))
