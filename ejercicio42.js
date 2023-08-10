
//Ejercicio42: Dados dos números, sacar un numero aleatorio entre ellos

const aleatorio = (min, max) => {

    return Math.round(Math.random() * (max - min) + min);

};


console.log(aleatorio(1, 75));