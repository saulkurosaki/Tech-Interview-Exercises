
//Ejercicio1: Dado un numero, devolver su tabla de multiplicar completa

const tablaMultiplicar = (num) => {
    const tabla = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    console.log('Tabla del ' + num + ' =');

    tabla.forEach((mult) => {
        console.log(mult + ' x ' + num + ' = ' + (mult*num));
    });
};

tablaMultiplicar(4);