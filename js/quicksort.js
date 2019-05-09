'use strict'
let testArray = [5,3,2,1,7,9,3]


// loop thru partition untill it finds first number that is smaller than pivot, than return its number
const findSmallerThanPivot = (array, start, end, pivot) =>{
    // if start is not smaller than end than array has only one number and it should return nothing
    for(let i = start; i <= end; i++){
        // if pointer is smaller than pivot just move along
        // array[i] is our pivot in this case
        if(array[i] <= pivot){
            // 
            continue
        // if the pointer is larger than pivot return its index
        } else {
            return i
        }
    }    
}

// loop thru partition untill it finds first number that is larger than pivot, than return its number
const findLargerThanPivot = (array, start, end, pivot) =>{
    // if start is not smaller than end than array has only one number and it should return nothing
    for(let i = end; i => end; i--){
        // if pointer is larger than pivot just move along
        // array[i] is our pivot in this case
        if(array[i] >= pivot){
            // 
            continue
        // if the pointer is smaller than pivot return its index
        } else {
            return i
        }
    } 
}

console.log(findSmallerThanPivot(testArray, 0, 6, 7))
console.log(findLargerThanPivot(testArray, 0, 6, 7))

const singleSwap = (array, start, end, pivot) => {
    let smallerThanPivot = findSmallerThanPivot(array,start, end, pivot);
    let largerThanPivot = findLargerThanPivot(array,start, end, pivot);

    [array[smallerThanPivot],array[largerThanPivot]] =  [array[largerThanPivot],array[smallerThanPivot]]
    // console.log(array)
    
    return [smallerThanPivot, largerThanPivot];

}

// console.log(singleSwap (testArray,0, 6, 2))

const partition = (array, start, end, pivot) => {
    while(start < end){
        console.log(array)
        let newStartEnd = singleSwap(array, start, end, pivot)
        start = newStartEnd[0];
        end = newStartEnd[1]
        console.log(array)
    }

    return [array, start, end]
}

console.log(partition(testArray,0, 6, 3))





