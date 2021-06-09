// Panaudoti Javascript "use-strict" režimą.
"use strict";

// Apsirašyti 4 kintamuosius: skaicius1, skaicius2, skaicius3, skaicius4.
var skaicius1, skaicius2, skaicius3, skaicius4;

skaicius1 = 2;
skaicius2 = 4;
skaicius3 = 6;
skaicius4 = 10;

var suma = skaicius1 + skaicius2 + skaicius3 + skaicius4;
var sandauga = skaicius1 * skaicius2 * skaicius3 * skaicius4;

// Į konsolę išvesti visus 4 skaičius, jų visų sumą ir sandaugą.
console.log(suma);
console.log(sandauga);

// Sukeisti skaicius1 ir skaicius2 reikšmes vietomis, pasinaudojant laikinuoju kintamuoju.
var temp = skaicius1;
skaicius1 = skaicius2;
skaicius2 = temp;

console.log(skaicius1, skaicius2);

// Sukeisti skaicius3 ir skaicius4 reikšmes vietomis be laikinojo kintamojo.

skaicius3 = skaicius3 + skaicius4; // 6+10=16
skaicius4 = skaicius3 - skaicius4; // 16-10=6
skaicius3 = skaicius3 - skaicius4; // 16-6=10

console.log(skaicius3, skaicius4);

// Į alert išvesti sukeitimo rezultatus.

alert("skaicius1 " + skaicius1 + ' skaicius2 ' + skaicius2 + ' skaicius3 ' + skaicius3 + ' skaicius4 ' + skaicius4);

// Susikurti kintamąjį maxSkaicius, jam priskirti maksimalią įmanomą skaitinę reikšmę (infinity netinka) ir išvesti į konsolę.

console.log(Math.max(skaicius1, skaicius2, skaicius3, skaicius4));

// Susikurti kintamuosius: skaicius5, skaicius6.
var skaicius5, skaicius6;
skaicius5 = 15;
skaicius6 = 20;

// Sukeisti kinamųju reikšmes skaicius5 ir skaicius6 pasitelkiant XOR operatorių.

skaicius5 = skaicius5 ^ skaicius6;
skaicius6 = skaicius5 ^ skaicius6;
skaicius5 = skaicius5 ^ skaicius6;

console.log(skaicius5, skaicius6);

// Rezultatą patalpinti į HTML dokumento div žymėje, kurios id="Rezultatas".

document.getElementById("rezultatas").innerHTML += 'skaicius5 = ' + skaicius5 + ' skaicius6 = ' + skaicius6;


