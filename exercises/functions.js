/*
Functions
*/

console.log("BEGIN Functions");

// Ejercicio 1

console.log("Ejercicio 1");
function suma(a, b) {
    return a + b;
}
var resultado = suma(5, 10);
console.log(resultado);

// Ejercicio 2

console.log("Ejercicio 2");
function sumaValida(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("Uno de los parámetros tiene error");
        return NaN;
    }
    return a + b;
}
var resultadoValido = sumaValida(5, "10");
console.log(resultadoValido);

// Ejercicio 3

console.log("Ejercicio 3");
function isInt(num) {
    return Number.isInteger(num);
}
console.log(isInt(5));
console.log(isInt(5.5));

// Ejercicio 4

console.log("Ejercicio 4");
function sumaEnteros(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("Uno de los parámetros tiene error");
        return NaN;
    }
    if (!isInt(a)) {
        alert("El primer número no es entero");
        a = Math.round(a);
    }
    if (!isInt(b)) {
        alert("El segundo número no es entero");
        b = Math.round(b);
    }
    return a + b;
}
var resultadoEnteros = sumaEnteros(5, 10.5);
console.log(resultadoEnteros);

// Ejercicio 5

console.log("Ejercicio 5");
function roundIfNotInteger(num) {
    if (!validateInteger(num)) {
        alert("Número no es entero. Se redondeará");
        return Math.round(num);
    }
    return num;
}

function sumaRound(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("Uno de los parámetros tiene error");
        return NaN;
    }
    a = roundIfNotInteger(a);
    b = roundIfNotInteger(b);
    return a + b;
}

var resultadoRound = sumaRound(5.2, 10.7);
console.log(resultadoRound);

console.log("END Functions");