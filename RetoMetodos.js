//Reto: Métodos del Array
/*
1. Declara un array que tenga los números del 1 al 30, utilizando un método
del array.

2. Debes aplicar un método del array para filtrar todos los números que
sean múltiplos de 3.

3. Debes aplicar un método del array para filtrar todos los números que
sean múltiplos de 5.

4. Debes aplicar un método para crear un nuevo arreglo que contenga el
valor de cada número multiplicado por 2.

5. Declara un array que tenga valores de diferentes tipos de datos, y utiliza
un método que nos diga si todos los tipos de datos son iguales o no.
*/

const numeros= new Array();

for (let i=0; i<30+1; i++ ){
    numeros.push(i);
}
//1
console.log (numeros);
//2
console.log('multiplos de 3');
let multiplos3=numeros.filter(x=>x%3===0);
console.log(multiplos3);
//3
console.log('multiplos de 5');
let multiplos5=numeros.filter(x=>x%5===0);
console.log(multiplos5);
//4
console.log('multiplicacion');
let multiplicacion =numeros.map(x=>x*2);
console.log(multiplicacion)
//5
const valores =[6,'hola',true];

let valor=valores.every(x=>typeof valores[0]===typeof x);
console.log (valor)
//OPCION2 -5
let datos =[1,2,3,'hello',true];
let igualTipo =datos.every((dato) => typeof datos[0]===typeof dato);
console.log ( '¿Tipos de datos iguales?' + igualTipo)