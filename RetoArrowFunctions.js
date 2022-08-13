// RETO ARROW FUNCTIONS
/*Vamos a crear una arrow function para pasarla como callback a un .map() que se le aplicará a una lista de strings, está
función tendrá la capacidad de encriptar nuestro lenguaje, y lo que hará es:
1. Primero convertir todo el mensaje a mayúscula.
2. Convertir los siguientes carácteres:
● A -> 4
● S -> 5
● E -> 3
● O -> 0
● G -> 6
● I -> 1
● T -> 7
3. Imprimir en pantalla cada frase encriptada.
Frases que estarán en el array:
“Los números pueden utilizarse como letras, y la frase resultante puede ser leída sin mucho esfuerzo.”
“Este es un mensaje super encriptado y solo los mejores podrán leerlo.”
Nota: Tengan en cuenta las tildes.
Pista: Existe un método de String para reemplazar letras.
*/


const frases=["Los números pueden utilizarse como letras, y la frase resultante puede ser leída sin mucho esfuerzo." ,
"Este es un mensaje super encriptado y solo los mejores podrán leerlo."];

const encriptar =(frase) => {
    let mensaje=frase.toUppercase().replace(/A/gi,'4').replace(/S/gi,'5').replace(/E/gi,'3').replace(/O/gi,'0').replace(/G/gi,'6').replace(/I/gi,'1').replace(/T/gi,'7');
    return mensaje
}
//console.log(encriptar(frases))

const frasesEncriptadas = frases.map(encriptar);
for(frases of mensaje){
    console.log(encriptar(frases))
} 




   // con un ciclo impriman cada frase encriptada
   // el resultado debe ser el siguiente:
   // L05 NÚM3R05 PU3D3N U71L1Z4R53 C0M0 L37R45, Y L4 FR453 R35UL74N73 PU3D3 53R L31D4 51N MUCH0 35FU3RZ0.
   // 3573 35 UN M3N54J3 5UP3R 3NCR1P74D0 Y 50L0 L05 M3J0R35 P0DRÁN L33RL0.