
//Ejercicio37: Dado un array o un texto, devolver el elemento o palabras que mas aparece.

const elQueMasAparece = (data) => {

    let repetitions = {};
    let maximum = 0;
    let mostRepeated;

    //Si es un string
    if(typeof data === 'string'){
        data = data.split(' ');
    };

    //Mapeo de datos y sus repeticiones
    for(el of data){

        if(!repetitions[el]){
        
            repetitions[el] = 1;

        }else{
            repetitions[el]++
        };

    };

    //Asignación del valor máximo de repeticiones y el valor mas repetido
    for(el in repetitions){

        if(repetitions[el] > maximum){

            maximum = repetitions[el];
            mostRepeated = el;

        };

    };

    const result = 'El elemento mas repetido es: "' + mostRepeated + '" con ' + maximum + ' repeticiones.';

    return result;
};


console.log(elQueMasAparece([1,2,3,4,2,5,6,2,7,8,2,9]));
console.log(elQueMasAparece('Hola soy saul kurosaki y este saul puede hacer todo lo que un saul kurosaki'));