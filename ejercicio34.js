
//Ejercicio34: Dados dos números, devolver los resultados de las operaciones básicas entre ellos 
//             (suma, resta, multiplicación y division)

const calculadora = (num1, num2) => {

    const suma = num1 + num2;
    const resta = num1 - num2;
    const mult = num1 * num2;
    const div = num1 / num2;
    const result = 'Tus números son: ' + num1 + ' y ' + num2 + '\n' 
                    + 'La suma es: ' + suma + '\n'
                    + 'La resta es: ' + resta + '\n'
                    + 'La multiplicación es : ' + mult + '\n'
                    + 'La division es: ' + div;

    return result;
};


console.log(calculadora(150, 3));