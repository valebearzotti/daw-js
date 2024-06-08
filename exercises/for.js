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

console.log("END For");