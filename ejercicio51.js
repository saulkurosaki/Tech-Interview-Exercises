
//Ejercicio51: Dado un array de números, devolver un array nuevo con los números pares e impares separados

const pares = (arr) => {

    const pares = arr.filter(el => (el % 2) === 0);
    const impares = arr.filter(el => (el % 2) !== 0);

    return {
        Pares: pares,
        Impares: impares,
    };
};


console.log(pares([1,2,3,4,5,6,7,8,9]));