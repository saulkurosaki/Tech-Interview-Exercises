
//Ejercicio10: Dado un numero, devolver una escalera con escalones de '[-]'
//             Usando el numero para los niveles de la escalera
//             [-]
//             [-][-]
//             [-][-][-]
//             [-][-][-][-]

const escalera = (num) => {
    let stair = '';

    for(let i = 1; i <= num; i++){
        let steps = '';

        for(let j = 1; j <= i; j++){
            steps += '[-]';
        };

        stair += steps + '\n'
    };

    return stair;
};

console.log(escalera(6));