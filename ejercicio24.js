
//Ejercicio24: Dado un Array de enteros y un numero, detectar si esa lista de números
//             es una permutation del 1 al numero aportado

//Como hacerlo:
//-Crear una función con parametros secuencia y num
//-Bucle del cero al numero
//-Return false si el numero actual +1 no se encuentra
//-Si salimos del bucle Return true

const permutation = (arr, num) => {

    for(let i = 0; i < num ; i++){

        if(arr.indexOf(i + 1) < 0){
            return false;
        };

    };

    return true;

};

console.log(permutation([1, 2, 3, 4, 5], 5));