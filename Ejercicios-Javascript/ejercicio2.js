/*
Ejercicio 2.
Reversión de cadena: Dada una frase y luego muestra la misma frase pero con las palabras en orden inverso.
*/

let frase, palabras, fraseInversa = "";

frase = prompt("Ingresa una frase: ");
palabras = frase.split(" ");

for(let i=palabras.length-1; i>=0; i--) {
    fraseInversa += palabras[i] + " ";
}

console.log("Frase: " + frase);
console.log("Frase en Orden Inverso: " + fraseInversa);
