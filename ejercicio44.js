
//Ejercicio44: Dado un array de strings, devolver otro con los valores que estén formados por mas de dos palabras

const dosPalabras = (arr) => {

    let result = [];

    for(el of arr){

        const divided = el.split(' ');

        if(divided.length >= 2){

            result.push(el);

        };

    };

    return result;
};


console.log(dosPalabras(['saul', 'Chanchito Feliz', 'paredes', 'Chanchito Triste', 'fano', 'Chanchito Felipe']));