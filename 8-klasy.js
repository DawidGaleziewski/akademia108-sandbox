
//  obiekt a klasa

// obiekt
let monetaZl = {
    promien: 20,
    nominal: 100,
    waga: 50,
    material: "złoto"
}

console.log(monetaZl.material);

// klasa
// w oop tworzymy nasze typy danych
// obiekt jest instancją klasy, np złota moneta jest instacją klassy moneta
// na stronie pojedyńcze ogłoszenie będzie obiektem/ instancją klasy ogłoszenie
// klasa jest podobna do matrycy, jest opisem szablonu

// zawsze klasa zaczyna się z Dużej
class Osoba {
    // konstruktor coś co tworzy właściwosci
    // konstruktor przyjmuje parametry
    constructor(imie, nazwisko, wzrost){
        // domyślna wartość - użyta jeśli podamy domyślny string
        this.imie = imie || 'imię';
        this.nazwisko = nazwisko;
        this.wzrost = wzrost;
        this.awesome ="true";
    }

    // metody klasy - nie trzeba pisac function
    wyswietlInfo() {
        console.log(`Imię: ${this.imie} \nNazwisko: ${this.nazwisko}`)
    }
}

let krystian = new Osoba('Krystian', 'Dziopa', 180);
console.log(krystian);

// gdy chcemy wartosć domyślną dajemy pusty string
let andrzej = new Osoba('', 'Kowalski')


