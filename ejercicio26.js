
//Ejercicio26: Dado un numero, mostrar su serie de Fibonacci.
//             La serie de Fibonacci es una secuencia de números donde cada numero es la suma de los dos anteriores.

//Como hacerlo:
//-Crear una funcion con el parametro numero
//-Crear variable con los dos primeros números de la serie
//-Bucle desde el dos al numero
//-Sumar los dos anteriores valores al numero actual
//-Devolver el resultado

const fibonacci = (num) => {

    let serie = [0, 1];

    for(let i = 2; i <= num; i++){

        serie.push(serie[i - 1] + serie[i - 2]);
        
    };

    const result = 'Serie completa: ' + serie.toString() + '\n Resultado de la serie de Fibonacci: ' + serie[serie.length - 1];

    return result;

};


console.log(fibonacci(10));