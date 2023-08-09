
//Ejercicio12: Dado un numero, devolver todos los números desde ese al 0 de 8 en 8
//             en una lista con guiones, y cada numero debe empezar por n°

//Bucle FOR
const hastaCero = (num) => {
    let resultado = '--- Del ' + num + ' al 0 de 8 en 8 ---';

    for(let i = num; i >= 0; i= i-8){
        resultado += '\n - n°' + i;
    };

    return resultado;
};

//Bucle While
const tillCero = (num) => {
    let result = '--- From ' + num + ' till cero subtracting 8 ---';

    while(num >= 0){
        result += '\n - n°' + num;
        num = num - 8;
    };

    return result;
};


console.log(hastaCero(200));
console.log(tillCero(100));