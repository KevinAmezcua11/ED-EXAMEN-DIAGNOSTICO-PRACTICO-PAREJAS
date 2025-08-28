/*
Ejercicio 3.
Palíndromo: Dada una palabra, verifica si es un palíndromo
(es decir, si se lee igual de adelante hacia atrás que de atrás hacia adelante).
*/

let palabra, palabraInvertida;

palabra = prompt("Ingresa una palabra: ");
palabraInvertida = palabra.split("").reverse().join("");

if (palabra.toLowerCase() === palabraInvertida.toLowerCase()) {
    console.log("La palabra '" + palabra + "' es un palíndromo.");
} else {
    console.log("La palabra '" + palabra + "' NO es un palíndromo.");
}
