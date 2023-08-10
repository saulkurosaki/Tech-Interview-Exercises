
//Ejercicio31: Dado un numero, indicar que tipo de angulo es.

const angulo = (num) => {

    let result = 'El numero: ' + num + ' es un: ' + 'Angulo ';

    if(num === 0){
        result += 'Nulo';
    }else if(num === 360){
        result += 'Completo';
    }else if(0 < num && num < 90){
        result += 'Agudo';
    }else if(num === 90){
        result += 'Recto';
    }else if(90 < num && num < 180){
        result += 'Obtuso';
    }else if(num === 180){
        result += 'Llano';
    }else if(180 < num && num < 360){
        result += 'Concavo';
    }else if(typeof num !== 'number'){
        result = 'Ingresa el tipo de dato correcto';        
    };

    return result;
};


console.log(angulo(0)); //Nulo
console.log(angulo(47)); //Agudo
console.log(angulo(90)); //Recto
console.log(angulo(145)); //Obtuso
console.log(angulo(180)); //Llano
console.log(angulo(254)); //Concavo
console.log(angulo(360)); //Completo
console.log(angulo('Chanchito Feliz')); //Tipo de dato incorrecto