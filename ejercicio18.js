
//Ejercicio18: Dado un numero, mostrar todos sus números divisores

const mostrarDivisores = (num) => {

    let divs = '';

    for(let i = 1; i <= num; i++){

        if(num % i === 0){
            divs += i + '\n';
        };

    };

    const result = 'Los números entre los que el ' + num + ' es divisible son: \n' + divs;

    return result;
};


console.log(mostrarDivisores(530));