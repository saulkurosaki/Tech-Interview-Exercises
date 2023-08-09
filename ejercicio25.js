
//Ejercicio25: Dado un String ponerlo completo en mayúsculas o minúsculas dependiendo
//             si hay mas mayúsculas o minúsculas por defecto en el string
//             Si hay mas mayúsculas ponerlo todo en mayúsculas
//             Si hay mas minúsculas ponerlo todo en minúsculas

const mayusMinus = (string) => {

    let mayus = 0;
    let minus = 0;

    for(letter of string){

        if(letter !== ' ' &&  letter === letter.toUpperCase()){
            mayus += 1;
        }else if(letter !== ' ' &&  letter === letter.toLowerCase()){
            minus += 1;
        };

    };

    console.log(mayus, minus); //Mayus and Minus TEST

    if(mayus > minus){
        return string.toUpperCase();
    }else if(mayus < minus){
        return string.toLowerCase();
    };

};

const mayusMinusTest = (str) => {

    let mayus = 0;
    let minus = 0;

    for(letter of str){

        if(/[A-Z]/.test(letter) && letter !== ' '){
            mayus++;
        }else if(/[a-z]/.test(letter) && letter !== ' '){
            minus++;
        };

    };

    console.log(mayus, minus); //Mayus and Minus TEST

    if(mayus > minus){
        return str.toUpperCase();
    }else if(mayus < minus){
        return str.toLowerCase();
    };

};


console.log(mayusMinus('Hola Soy Saul CON MUCHAS MAS MAYUSCULAS PARA probar la funcion'));
console.log('');
console.log(mayusMinusTest('Hola Soy Saul CON MUCHAS MAS MAYUSCULAS PARA probar la funcion'));