
//Ejercicio32: Dado un array de números, devolver el array con sus números elevados al cubo.

const alCuadrado = (arr) => {

    arr = arr.filter(num => typeof num === 'number');

    const newArr = arr.map(num => Math.pow(num, 3));

    return newArr;
};


console.log(alCuadrado([5, 'Chanchito Feliz', 6, 'Chanchito Triste', 7, 'Chanchito Felipe', 8, 'Saul Kurosaki', 9]));