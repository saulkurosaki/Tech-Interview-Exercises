
//Ejercicio40: Dado un array de números, devolver el valor mas bajo y el mas alto

//Solución 1: Arcaico
const altoBajo = (arr) => {

    let max = 0;

    for(num in arr){

        if(arr[num] > max){
            max = arr[num];
        };

    };

    let min = max;

    for(num in arr){

        if(arr[num] < min){
            min = arr[num];
        };

    };

    const result = 'Mínimo: ' + min + '\n Máximo: ' + max;

    return result;
};

//Solución 2: Ordenando el Array
const greaterLower = (arr) => {

    arr = arr.sort((a,b) => a-b);

    const min = arr[0];
    const max = arr[arr.length - 1];

    const result = 'Mínimo: ' + min + '\n Máximo: ' + max;

    return result;
};


console.log(altoBajo([12, 140, 98, 22, 4, 99, 278, 14, 72]));
console.log('');
console.log(greaterLower([12, 140, 98, 22, 4, 99, 278, 14, 72]));