
//Ejercicio14: Dado un string y un numero, repetir el string tantas veces como el numero indique

//Función Clásica
const repiteme = (text, reps) => {
    let repited = 'Repitiendo frase ' + reps + ' veces: \n';

    for(let i = 1; i <= reps; i++){
        repited += text + '\n';
    };

    return repited;
};


console.log(repiteme('Hola soy chanchito feliz', 6));