
//Ejercicio48: Dado un string, devolver cuales son las letras que aparecen solo una vez
//             y cual es la primera

const soloUnaVez = (string) => {

    let map = {};
    let onlyOne = [];
    let firstLetter = '';

    //Separar y limpiar espacios
    string = string.split('').filter(el => el !== ' ');

    //Mapeo de repetición de letras
    for(letter of string){

        if(!map[letter]){
            map[letter] = 1;
        }else{
            map[letter]++;
        };

    };

    //Asignación de letras que solo se repitan una sola vez
    for(element in map){

        if(map[element] === 1){
            onlyOne.push(element);
        };

    };

    firstLetter = onlyOne[0];

    return [
        onlyOne, 
        firstLetter,
    ];
};


console.log(soloUnaVez('frase frase HOY'));