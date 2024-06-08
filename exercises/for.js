/*
For
*/

console.log("BEGIN For");

// Ejercicio 1

console.log("Ejercicio 1");
const words = ["blink-182", "sum41", "interpol", "coldplay", "radiohead"];
for (const i = 0; i < words.length; i++) {
    alert(words[i]);
}

// Ejercicio 2

console.log("Ejercicio 2");
for (const i = 0; i < words.length; i++) {
    const word = words[i];
    const capitalizedWord = word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
    alert(capitalizedWord);
}

// Ejercicio 3

console.log("Ejercicio 3");
var sentence = "";
for (var i = 0; i < words.length; i++) {
    sentence += words[i] + " ";
}
alert(sentence.trim());

// Ejercicio 4

console.log("Ejercicio 4");
var numbers = [];
for (var i = 0; i < 10; i++) {
    numbers.push(i);
}
console.log(numbers);

console.log("END For");