'use strict'
const stringFlip = (string) => {
    let result = string.split("").reverse().join('');
    console.log(result);
}

stringFlip('adakedima108')

console.clear();

const stringSort = (string) => {
    let result =  string.split('').sort().join('');
    return result
}

console.log(stringSort('akademia108'));

console.clear();

const MultiplyAndSum = (numberArray) => {

    let sum = 0;
    let multiply = 1;

    numberArray.forEach(num => sum += num);
    numberArray.forEach(num => multiply *= num);

    console.log(`suma to ${sum}`);
    console.log(`iloczyn to ${multiply}`)
}

MultiplyAndSum([1, 2, 3, 4, 5, 6])
console.clear();

// suma kwadratów
const powerSum = numberArray => {
    let result = 0;
    numberArray.forEach( number => result += Math.pow( number, 2));
    return result;
}

console.log(powerSum([0,1,2,3,4,5]));
console.clear();

const fibonacciNth = n => {
    let result = 0;
    let allPreviousNumbers = [0,1];
    for(let i = 0; i < n -1; i++){
        allPreviousNumbers.push(allPreviousNumbers[i] + allPreviousNumbers[i+1])
    }
    console.log(allPreviousNumbers);
}

fibonacciNth(9);