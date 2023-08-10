
//Ejercicio41: Dado un numero, mostrar un triangulo de asteriscos (*) con ese numero de filas
//   *  
//  ***
// *****
//*******

const triangulo = (rows) => {

    let asterisks = '';

    //Cada Fila
    for(let row = 1; row <= rows; row++){

        //Cada Espacio
        for(let space = rows - row; space > 0; space--){
            asterisks += ' ';
        };

        //Cada Asterisco
        for(let asterisk = 1; asterisk <= (row + (row - 1)); asterisk++){

            asterisks += '*';

        };

        asterisks += '\n';

    };

    return asterisks;
};


console.log(triangulo(12));