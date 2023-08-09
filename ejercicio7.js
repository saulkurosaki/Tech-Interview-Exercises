
//Ejercicio7: Dados dos números, devolver cuantos números impares hay entre ellos

const impares = (num1, num2) => {
    let counter = 0;

    for(let i = num1; i <= num2; i++){

        //impar
        if((i % 2) === 1){
            counter++
        };

    };

    const result = 'Los números impares que existen entre el ' + num1 + ' y el ' + num2 + ' son: ' + counter;

    return result;
};


console.log(impares(1, 100));