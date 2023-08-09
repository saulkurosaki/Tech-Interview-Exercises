
//Ejercicio17: Dado un numero, poner los números del 1 hasta el numero.
//             Pero para múltiplos de 3 imprimir 'Fizz' en lugar del numero.
//             Y para los múltiplos del 5 imprimir 'Buzz'
//             Y para múltiplos del 3 y 5 imprimir 'FizzBuzz'

const fizzbuzz = (num) => {

    let result = '';

    for(let i = 1; i <= num; i++){

        if(i % 15 === 0){
            result += 'FizzBuzz \n';
        }else if(i % 3 === 0){
            result += 'Fizz \n';
        }else if(i % 5 === 0){
            result += 'Buzz \n';
        }else{
            result += i + '\n';
        };

    };

    return result;
};


console.log(fizzbuzz(100));