
const invertir = (text) => {
    let inverted = '';
    
    for(let char of text){
        inverted = char + inverted;
    };
    
    return inverted;
};

//Revertir un texto o palabra con métodos de JS\
const invert = (text) => {
    return text.split('').reverse().join('');
};

// console.log('Texto invertido con bucle FOR: ' ,invertir('Hola soy Saul Paredes'));
// console.log('Texto invertido con métodos JS: ', invert('Invierteme si es que puedes'));

module.exports = {
    invert,
    invertir,
};