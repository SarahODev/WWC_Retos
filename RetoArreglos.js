//Reto: ARREGLOS 
/*
1. Declara un array que vamos a llamar “estudiantes” con los siguientes
valores: Ana, Manuela, Raúl, Carolina, María, Antonio, Cristina

2. Con un ciclo recorre el array e imprime en consola los estudiantes cuyo
nombre empiece por ‘A’.

3. Con otro ciclo recorre el array e imprime en consola los estudiantes cuyo
nombre tenga más de 6 letras.
*/

const estudiantes1 = ['Ana', 'Manuela', 'Raúl', 'Carolina', 'María', 'Antonio', 'Cristina'];
for (let listado = 0; listado < estudiantes1.length; listado ++) {
    console.log (estudiantes1[listado]);
}



const estudiantesU = ['Ana', 'Manuela', 'Raúl', 'Carolina', 'María', 'Antonio', 'Cristina', 'Alberto'];
for (let listado = 0; listado < estudiantesU.length; listado ++){
    if(estudiantesU[listado][0]=== "A"){
        console.log(estudiantesU[listado]);
    }
}



const estudiantes = ['Ana', 'Manuela', 'Raúl', 'Carolina', 'María', 'Antonio', 'Cristina'];

for(let i=0; i<estudiantes.length; i++){
    if(estudiantes[i].length>=6){
        console.log(estudiantes[i])
    }
}

