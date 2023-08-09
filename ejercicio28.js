
//Ejercicio28: Dado un numero, devolver su factorial.
//             El factorial de un numero es la multiplicación de todos los números hasta llegar a el.

const factorial = (num) => {

    let mult = 1;

    for(let i = 2; i <= num; i++){

        mult *= i;

    };

    const result = 'El factorial de ' + num + ' devuelve: ' + mult;

    return result;
};

console.log(factorial(5));