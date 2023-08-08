
//Ejercicio2: Dada una cadena de texto, comprobar si es un palindromo o no
//            Los Palindromos son palabras que se leen igual aun estando invertidos
//            Por ejemplo: ana, bob, otto, allivessevilla

const palindromo = (text) => {
    const separate = text.split('');
    const invert = separate.reverse();
    const invertedText = invert.join('');

    console.log('Tu palabra es: ' + text);
    console.log('Tu palabra invertida es: ' + invertedText);

    if(invertedText === text) {
        console.log('Tu palabra SI es un Palindromo');
    }else{
        console.log('Tu palabra NO es un Palindromo');
    };

};


palindromo('allivessevilla');