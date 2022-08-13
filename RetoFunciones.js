//RETO: FUNCIONES
/*
Necesitamos crear una calculadora, y para ellos debemos hacer las siguientes funciones:
● Suma.
● Resta.
● Multiplicación.
● División (ten en cuenta que si se va a dividir por cero, imprimimos que no se puede dividir por
cero y el resultado será cero).
● Potenciación.
La función debe recibir los parámetros y entregarnos el valor de la operación aritmética.
Para probar vamos a hacer 5 operaciones por cada función.
Y como plus, debemos validar que los parámetros si cumplan con que sean números. Si pasa algo
diferente como un texto u otro objeto, entonces debemos imprimir el error y devolver cero en ese
caso.
*/


//SUMA
function suma(n1,n2){
    if(typeof n1 !=='number'){
        console.log('ERROR, no es un número')
        return 0;
    }
    if(typeof n2 !=='number'){
        console.log('ERROR, no es un número')
        return 0;
    }
    return n1 + n2;
}
let resultadoS= suma(6,3);
console.log(resultadoS);


//RESTA
function resta(n1,n2){
    if(typeof n1 !=='number'){
        console.log('ERROR, no es un número')
        return 0;
    }
    if(typeof n2 !=='number'){
        console.log('ERROR, no es un número')
        return 0;
    }
    return n1 - n2;
}
let resultadoR= resta(5,1);
console.log(resultadoR);


//MULTIPLICACIÓN
function multiplicación(n1,n2){
    if(typeof n1 !=='number'){
        console.log('ERROR, no es un número')
        return 0;
    }
    if(typeof n2 !=='number'){
        console.log('ERROR, no es un número')
        return 0;
    }
    return n1 * n2;
}
let resultadoM= multiplicación(3,9);
console.log(resultadoM);


//DIVISIÓN
function división(n1,n2){
    if(typeof n1 !=='number'){
        console.log('ERROR, no es un número')
        return 0;
    }
    if(typeof n2 !=='number'){
        console.log('ERROR, no es un número')
        return 0;
    }
    if(n2 == 0){
        return 0;
    } else {
        let n3= n1/n2;
        return n3;
    }
}
let resultadoD= división(8,2);
console.log(resultadoD);


//POTENCIACIÓN
function Potenciación(n1,n2){
    if(typeof n1 !=='number'){
        console.log('ERROR, no es un número')
        return 0;
    }
    if(typeof n2 !=='number'){
        console.log('ERROR, no es un número')
        return 0;
    }
    return n1 ** n2;
}
let resultadoP= Potenciación(2,'hola');
console.log(resultadoP);





