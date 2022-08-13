//Reto: Objetos
/*
1. Declara un objeto que represente una mascota que tenga los siguientes
atributos: nombre, tipo de animal, edad, nombre del dueño y juguetes.
2. El atributo juguetes debe contener un arreglo de valores que hagan
referencia a todos los juguetes de la mascota.
3. Crea 2 mascotas más.
4. Imprime en consola los nombres de las 3 mascotas con el nombre de su
dueño.
5. Ej: Ayudante de Santa es la mascota de Homero Simpson.
*/

const mascotaA = {
    nombre:'Figo',
    tipoAnimal:'Perro',
    edad:7,
    nombreDueño:'Sarah',
    juguetes:['kong','pelota','muñeco']
}

const mascotaB = {
    nombre:'Cafu',
    tipoAnimal:'perro',
    edad:1,
    nombreDueño: 'Maria Jose',
    juguetes:['hueso','aro','cuerda']
}

const mascotaC = {
    nombre: 'Tommy',
    tipoAnimal:'gato',
    edad:'4',
    nombreDueño:'Carlos',
    juguetes:['rascador','sonajero','lana']
}

let mascotas = [mascotaA, mascotaB, mascotaC];

//OPTION1
for (let i=0; i<mascotas.length; i++){
    console.log(mascotas[i].nombre +' es la mascota de '+ mascotas[i].nombreDueño)
}

//OPTION2
for(let mascota of mascotas){
    console.log(mascota.nombre + ' es la mascota de '+ mascota.nombreDueño)
}