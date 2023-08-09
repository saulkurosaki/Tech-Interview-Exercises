
//Ejercicio15: Dada una cadena de texto, devolver el carácter mas usado

//Como hacerlo: 
//-Crear una función que reciba el texto
//-Mapear las letras en un JSON
//-Recorremos el mapeo
//-Hacemos condición para ver que condición es mayor

const masUsado = (text) => {

    let map = {}; //JSON de letras
    let max = 0; //Máximo de repeticiones
    let mostRepeated = ''; //Letra mas repetida

    //Bucle para crear letra en el JSON o aumentarle su contador en 1
    for(char of text){
        
        if(!map[char]){
            map[char] = 1;
        }else{
            map[char]++;
        };

    };

    //Bucle para actualizar el valor máximo de repeticiones y la letra mas repetida
    for(char in map){

        if(map[char] > max){
            max = map[char];
            mostRepeated = char;
        }

    };

    const result = 'Tu texto es: "' + text + '"\n  La letra mas repetida es la "' + mostRepeated + '" con: ' + max + ' repeticiones.'

    return result;
};

console.log(masUsado('saulkurosaki13@gmail.com'));