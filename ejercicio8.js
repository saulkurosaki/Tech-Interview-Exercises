
//Ejercicio8: Dado un numero entero, inviértelo y devuelve el nuevo entero

const invertirNumero = (num) => {
    const inverted = num.toString().split('').reverse().join('');
    const invertedNum = parseInt(inverted) * Math.sign(num);
    const result = 'El numero ' + num + ' invertido es: ' + invertedNum;

    return result;
};


console.log(invertirNumero(-3679));