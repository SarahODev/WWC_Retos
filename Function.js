// function categorizar(edad) {
//     if (edad < 11) {
//         return 'Niñez'
//     }
//     if(edad >= 11 && edad <= 18){
//         return 'Juventud';
//     }
//     if (edad >= 19){
//         return 'Adultez';
//     }
// }

// const categoria = categorizar(32);

// console.log (categoria);


function categorizar(edad) {
    if (edad < 11) {
        return 'Niñez'
    }
    if(edad >= 11 && edad <= 18){
        return 'Juventud';
    }
    return 'Adultez';
}

const categoria = categorizar(22);

console.log (categoria);
