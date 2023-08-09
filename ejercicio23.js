
//Ejercicio23: Dada un cadena de texto, poner el mayúscula la primera letra de cada palabra y devolver la cadena;

//Como hacerlo:
//-Crear una función con parametro texto
//-Poner la primera letra del string en Mayuscula
//-Recorrer el string completo
//-Si el carácter anterior a la letra actual es un espacio ponerlo en Mayuscula
//-Si el carácter no es un espacio añadirlo al resultado

const enMayuscula = (text) => {
    
    let resultado = '';

    for(char in text){ //Iteración del indice de cada carácter

        if(text[char -1] === ' ' || parseInt(char) === 0){ //Si un carácter antes del iterado es un espacio o el indice del iterado convertido a numero es igual a 0
            resultado += text[char].toUpperCase();
        }else{ //Todos los demás caracteres se añaden al string resultado
            resultado += text[char];
        };

    };

    return resultado
};


console.log(enMayuscula('hola mi nombre es saul kurosaki y soy nuevo en esta clase y soy amigo de chanchito feliz'));