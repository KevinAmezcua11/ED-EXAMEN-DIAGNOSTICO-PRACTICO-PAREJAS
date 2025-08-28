/*
Ejercicio 8.
Búsqueda de elementos en un arreglo: Crea un arreglo de nombres y dada una cadena con un 
nombre, verifica si ese nombre está presente en el arreglo y muestra un mensaje apropiado.
*/

let arrayNombres = ["Kevin", "Juan", "Carlos", "Maria", "Pablo", "Esteban"];
let cadena = "", palabras;
let encontrado = false;

cadena = prompt("Ingrese una frase: ").toUpperCase();

palabras = cadena.split(" ");

for(let i=0; i<palabras.length; i++) {
    for(let j=0; j<arrayNombres.length; j++) {
        if(palabras[i] == arrayNombres[j].toUpperCase()) {
            encontrado = true;
            console.log("El nombre '" + arrayNombres[j] + "' SI se encuentra en la frase." );
        }
    }
}

if(encontrado == false) {
    console.log("El nombre NO se encuentra en la frase." );
}