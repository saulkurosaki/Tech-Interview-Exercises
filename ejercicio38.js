
//Ejercicio38: Dado un numero, mostrar listado de los cuadrados de todos 
//             los números naturales hasta llegar a el mismo

const cuadrados = (limit) => {

    let result = '0';

    for(let i = 1; i <= limit; i++){

        result += ', ' + Math.pow(i, 2);

    };

    return result;
};


console.log(cuadrados(12));