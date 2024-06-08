/*
Arrays
*/

console.log("BEGIN Arrays");

// Ejercicio 1

console.log("Ejercicio 1");
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Mes 5: " + meses[4]);
console.log("Mes 11: " + meses[10]);

// Ejercicio 2

console.log("Ejercicio 2");
console.log(meses.sort());

// Ejercicio 3

console.log("Ejercicio 3");
const arr = ["b", "c", "d"];
arr.push("e");
arr.unshift("a");
console.log(arr);

// Ejercicio 4

console.log("Ejercicio 4");
arr.shift();
arr.pop();
console.log(arr);

// Ejercicio 5

console.log("Ejercicio 5");
arr.reverse();
console.log(arr);

// Ejercicio 6

console.log("Ejercicio 6");
const joint = arr.join("-");
console.log(joint);

// Ejercicio 7

console.log("Ejercicio 7");
const copyMeses = meses.slice(meses.indexOf("Mayo"), meses.indexOf("Noviembre") + 1);
console.log(copyMeses);

console.log("END Arrays");