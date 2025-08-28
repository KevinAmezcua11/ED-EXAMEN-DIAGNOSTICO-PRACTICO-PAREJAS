/*
Ejercicio 4.
Ordenamiento de un arreglo: Crea un arreglo de números desordenados y luego ordénalo de 
menor a mayor utilizando algún algoritmo de ordenamiento (p. ej., el método sort()).
*/

let arrayNum = [];

for(let i=0; i<=10; i++) {
    arrayNum[i] =  Math.round(Math.random() * 100);
}

console.log("Array DESORDENADO = [" + arrayNum + "]");

arrayNum.sort(function(a,b) {
    return a - b;
});

console.log("Array ORDENADO = [" + arrayNum + "]");