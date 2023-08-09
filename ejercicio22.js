
//Ejercicio22: Dados dos números, indicar cual es mayor y cual es menor

const mayorMenos = (num1, num2) => {

    let result = '';

    if(num1 > num2){
        result = 'EL NUMERO MAYOR ES: ' + num1 + '\n EL NUMERO MENOR ES: ' + num2;
    }else if(num1 < num2){
        result = 'EL NUMERO MAYOR ES: ' + num2 + '\n EL NUMERO MENOR ES: ' + num1;
    }else if(num1 === num2){
        result = 'Los dos números son iguales';
    };

    return result;
};


console.log(mayorMenos(48, 72));