
//Ejercicio29: Dado un numero, indicar si es un numero capicua o no.
//             Los números capicua se pueden leer igual de izquierda a derecha y viceversa.

const capicua = (num) => {

    const invertedNum = parseInt(num.toString().split('').reverse().join(''));
    let result = '';

    if(invertedNum === num){
        result = 'Devuelve: ' + true + '\n Por lo tanto el num: ' + num + ' SI es un numero capicua';
    }else{
        result = 'Devuelve: ' + false + '\n Por lo tanto el num: ' + num + ' NO es un numero capicua';
    };

    return result;
};

console.log(capicua(4004));