/*
Ejercicio 5.
Suma de elementos de un arreglo: Crea un arreglo de números y calcula la suma de todos sus elementos.
*/

let numeros = [10, 20, 30, 40, 50];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

console.log("Arreglo: " + numeros);
console.log("Suma de los elementos: " + suma);
