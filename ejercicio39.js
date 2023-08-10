
//Ejercicio39: Dado un texto, comprobar que sea un email valido

const comprobarEmail = (email) => {

    return /^\w+@\w+\.\w+$/gi.test(email);

};


console.log(comprobarEmail('saulkurosaki13@gmail.com')); //True