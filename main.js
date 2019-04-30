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
    // array stores two first fibonacci numbers
    let allPreviousNumbers = [0,1];

    // loop will run as long as every number will be calculated
        // it will stop after n-1 times (due to fact it will start from 0 and not from 1)
    for(let i = 0; i < n -1; i++){

        // for each iteration there is new number pushed into array
            // this number is sum of current n and current n +1
            // first iteration will add: 0 + 1, 2nd: 1 + 1, 3rd 1 + 2
        allPreviousNumbers.push(allPreviousNumbers[i] + allPreviousNumbers[i+1])
    }

    // return last number of the array
    return allPreviousNumbers[allPreviousNumbers.length-1]
}

console.log(fibonacciNth(9));

console.clear();

// json
let jsonPracownicy = {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}

// display whole object
console.log(jsonPracownicy)

// display individual objects and their firstName/lastname key values
jsonPracownicy.pracownicy.forEach((staffMember, index) => {
    console.log(`praconwik o indexie ${index} ma na imię ${staffMember.firstName}, a na nazwisko ${staffMember.lastName}`)
    console.log('~~~~~~~~~~~~')
})

console.clear();

// class
class Ksiazka {
    constructor(tytul, autor, przeczytana){
        this.tytul = tytul || 'nieznany';
        this.autor = autor || 'nieznany';
        this.przeczytana = przeczytana || false;
    }

    opiszKsiazke(){
        return `Książka ma tytuł \"${this.tytul}\", autorem jest ${this.autor} i ${this.przeczytana ? '' : 'nie '}została przeczytana`
    }
}

let krajNiewiernych = new Ksiazka('W kraju niewiernych', 'Jacek Dukaj', true);

let diuna = new Ksiazka('Diuna', 'F. Herbert', false );

let graOTron = new Ksiazka('Gra o tron', 'George R.R Martin', false);

let biblioteczka = [krajNiewiernych, diuna, graOTron];

const iloscPrzeczytanych = (tablicaKsiazek) => {
    let iloscPrzeczytanych = 0;
    tablicaKsiazek.forEach((ksiazka)=> {
            if (ksiazka.przeczytana) iloscPrzeczytanych++;
            console.log(ksiazka.opiszKsiazke());
        }
    )
    return iloscPrzeczytanych
}

console.log(`${iloscPrzeczytanych(biblioteczka)} ksiazek zostało przeczytanych`);