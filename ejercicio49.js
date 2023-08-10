
//Ejercicio49: Dado un objeto, comprobar si existe una propiedad en concreto

const miObjeto = {
    nombre: 'Saul',
    apellido: 'Paredes',
    edad: '21',
    hobbie: 'Música',
    colorOjos: 'Cafe',
    invalido: false,
};

//Normal
const existePropiedad = (obj, property) => {

    let result = false;

    for(prop in obj){

        if(prop === property){
            result = true;
        };

    };

    return result;
};

//Object.hasOwnProperty
const propExists = (obj, property) => {

    if(typeof obj === 'object' && typeof property === 'string' && obj.hasOwnProperty(property)){
        return true
    };

    return false;
};


console.log(existePropiedad(miObjeto, 'hobbie')); //True
console.log(existePropiedad(miObjeto, 'colorCabello')); //False
console.log('');
console.log(propExists(miObjeto, 'hobbie')); //True
console.log(propExists(miObjeto, 'colorCabello')); //False