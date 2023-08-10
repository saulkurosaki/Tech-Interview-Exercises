
//Ejercicio46: Dado un string, devolver todos los posibles substrings

const allSubStrings = (str) => {

    let substrings = [];

    for(letter in str){

        let start = parseInt(letter);

        for(let i = 0; i <= str.length - start; i++){

            let end = parseInt(i) + parseInt(start);

            substrings.push(str.substring(start, end));

        };

    };

    return substrings.filter(el => el.length >= 1);
};


console.log(allSubStrings('hola'));