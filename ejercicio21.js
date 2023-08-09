
//Ejercicio21: Dada una cadena de texto y un numero, recortar el string mostrando los primeros x primeros caracteres.

const recortar = (text, num) => {

    let result = '';

    if(typeof text === 'string' && typeof num === 'number'){
        result = 'Tu texto recortado es: "' + text.substring(0, num) + '"';
    }else{
        result = 'Tus datos no son correctos. (Recuerda que el primer argumento debe ser tu texto y el segundo debe ser un numero';
    };

    return result;
};

console.log(recortar('saulkurosaki se ha convertido en un chanchito feliz', 24));