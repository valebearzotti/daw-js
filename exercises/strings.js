/*
Strings
*/

console.log("BEGIN Strings");

// Ejercicio 1

console.log("Ejercicio 1");
const str = "string";
const uppercase = str.toUpperCase();
console.log(uppercase);

// Ejercicio 2

console.log("Ejercicio 2");
const str2 = "longerstring";
const first5 = str2.substring(0, 5);
console.log(first5);

// Ejercicio 3

console.log("Ejercicio 3");
const str3 = "longerstring";
const last3 = str3.substring(str3.length - 3);
console.log(last3);

// Ejercicio 4

console.log("Ejercicio 4");
const str4 = "longerstring";
const capitalized = str4.substring(0, 1).toUpperCase() + str4.substring(1).toLowerCase();
console.log(capitalized);

// Ejercicio 5

console.log("Ejercicio 5");
const str5 = "hello world!";
const firstSpace = str5.indexOf(" ");
console.log(firstSpace);


// Ejercicio 6

console.log("Ejercicio 6");
const str6 = "rosario central";
const space = str6.indexOf(" ");
const word1 = str6.substring(0, space);
const word2 = str6.substring(space + 1);
const formatted = palabra1.substring(0, 1).toUpperCase() + palabra1.substring(1).toLowerCase() + " " +
                 palabra2.substring(0, 1).toUpperCase() + palabra2.substring(1).toLowerCase();
console.log(formatted);


console.log("END Strings");