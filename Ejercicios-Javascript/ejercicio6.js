/*
Ejercicio 6.
Filtrado de elementos en un arreglo: Crea un arreglo de números y filtra los elementos 
para mostrar solo aquellos que sean mayores que un valor dado por el usuario.
*/

let num, arrayNum = [], arrayMayores = [];

for(let i=0; i<=20; i++) {
    arrayNum[i] = Math.round(Math.random() * 100);
}

num = parseInt(prompt("Ingrese un Número: (0-100) "));

for(let i=0; i<arrayNum.length-1; i++) {
    if(arrayNum[i] > num) {
        arrayMayores.push(arrayNum[i]); 
    }
}

console.log("Array = [" + arrayNum + "]");
console.log("Array con solo NÚMEROS MAYORES que " + num + " = [" + arrayMayores + "]");