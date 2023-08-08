
//Ejercicio3: Dada una palabra, buscarla en una frase y devolver cuantas veces aparece

const coincidencias = (phrase, word) => {
    const cleanText = phrase.toLowerCase().replace(/[¡!,.-]/gi, '');
    let result = 0;

    if(cleanText.includes(word)){

        let words = cleanText.split(' ');
        let map = {};

        words.forEach((word) => {

            if(map[word]){
                map[word]++;
            }else{
                map[word] = 1;
            };

        });

        result = map[word]

    }else{
        result = 0;
    };

    return result;
};


console.log(
    'Numero de coincidencias en la frase: ',
    coincidencias('Hola, soy una FRASE de prueba, con este curso aprenderás e implementaras bastante tu lógica de programación y FRASE tras FRASE, podrás ser mucho mejor.', 'frase')
);