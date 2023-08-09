
//Ejercicio20: Dadas dos cadenas de texto, crear un algoritmo que compruebe si son anagramas entre si.
//             Una cadena es un anagrama de otra si usa los mismos caracteres en la misma cantidad.
//             No tener en cuenta espacios, símbolos raros, puntos, etc...

//Como hacerlo:
//-Crear una función para limpiar los textos
//-Quitar todo lo que no sea texto
//-Poner en Minúsculas
//-Crear array de letras
//-Ordenarlo
//-Unirlo
//-Función para comparar las dos palabras

const limpiarTextos = (text) => {
    return text
           .replace(/[^\w]/gi, '') //Reemplazar todos los caracteres que no sean letras
           .toLowerCase() //Transformar texto a minúsculas
           .split('') //Separar todos los caracteres en un Array
           .sort() //Ordenar caracteres del Array por orden alfabético
           .join(''); //Unir el Array ordenado en un String ordenado y comparable
};

const anagramas = (text1, text2) => {
    const anagrama = limpiarTextos(text1) === limpiarTextos(text2);
    const result = 'Tu primer texto es: "' + text1 + '"\n Tu segundo texto es: "' + text2 + '"\n Tu texto es un anagrama?: ' + anagrama;

    return result;
};


console.log(anagramas('SeRgIo!!,.-_', 'Gersio!!-.,_?'));