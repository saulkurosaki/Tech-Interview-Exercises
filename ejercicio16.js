
//Ejercicio16: Dada una cadena de texto, devolver cuantas vocales tiene (a, e, i, o, u)

//Como hacerlo:
//-Crear una función que reciba el texto
//-Metodo match con RegularExpression
//-Devolver el resultado


//Usando Estructuras de Control
const vocales = (text) => {

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let total = 0;

    for(char of text){

        if(vowels.includes(char)){
            total++;
        };
    };

    const result = 'Tu texto es: "' + text + '" \n' + 'El total de vocales en este texto son: ' + total;

    return result;
};


//Usando el Metodo Match del objeto String y RegularExpressions
const vowels = (text) => {
    const coincidences = text.match(/[aeiou]/gi);
    const result = 'Tu texto es: "' + text + '" \n' + 'El total de vocales en este texto son: ' + coincidences.length;

    return result;
};


console.log(vocales('Hola mi nombre es chanchito feliz'));
console.log('');
console.log(vowels('Como estan todos yo soy Pedrito Sola'));