
//Ejercicio4: Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres
//            sin usar métodos del lenguaje, solo estructuras de control

//Revertir un texto o palabra sin métodos de JS
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

console.log('Texto invertido con bucle FOR: ' ,invertir('Hola soy Saul Paredes'));
console.log('Texto invertido con métodos JS: ', invert('Invierteme si es que puedes'));