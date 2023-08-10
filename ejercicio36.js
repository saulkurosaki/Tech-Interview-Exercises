
//Ejercicio36: Dado un texto devolver cuantas consonantes y cuantas vocales tiene

const cuentaLetras = (text) => {

    let vowels = 0;
    let consonants = 0;
    let cleanText = text.split('')
                    .filter(letter => /[áéíóú\w]/gi.test(letter) && isNaN(letter))
                    .join('');

    for(letter of cleanText){

        if(/[áéíóúaeiou]/gi.test(letter)){
            vowels++;
        }else{
            consonants++
        };

    };

    const result = 'Cantidad de Vocales: ' + vowels + '\n Cantidad de Consonantes: ' + consonants;

    return result;
};


console.log(cuentaLetras('Hola!!!! soy Chanchito Feliz, y me gusta, comer hamburguesas con papas... á é í ó ú 256 452 999'));