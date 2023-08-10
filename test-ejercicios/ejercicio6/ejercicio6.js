
//Ejercicio6: Dibujar un cuadrado hueco con asteriscos
//            ****
//            *  *
//            *  *
//            ****

const lado = (lados) => {
    let lado = '';

    for(let i = 0; i < lados; i++){
        lado += '*';
    };

    return lado
};

const cuadrado = (num) => {
    let dibujo = lado(num) + '\n';

    let contenido = '';
    for(let i = 2; i < num; i++){

        contenido = '*';

        for(let x = 2; x < num; x++){
            contenido += ' ';
        };

        contenido += '*'

        dibujo += contenido + '\n';
    };

    dibujo += lado(num);

    return dibujo
};

module.exports = cuadrado;

// console.log(cuadrado(8));