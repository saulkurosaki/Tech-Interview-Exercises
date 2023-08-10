
//Ejercicio47: Dado un array de objetos, devolver cuales son la aficiones mas
//             comunes de los usuarios

const users = [
    {
        nombre: 'Victor',
        aficion: ['informática', 'cine', 'juegos'],
    },
    {
        nombre: 'Juan',
        aficion: ['cine', 'futbol', 'tenis'],
    },
    {
        nombre: 'Paco',
        aficion: ['informática', 'cine', 'surf'],
    },
    {
        nombre: 'Pepe',
        aficion: ['informática', 'cine', 'futbol', 'surf'],
    },
];

const aficiones = (arrObj) => {

    let map = {};

    for(obj of arrObj){

        for(let aficion of obj.aficion){

            if(!map[aficion]){

                map[aficion] = 1;

            }else{

                map[aficion]++;

            };

        };

    };

    return map;
};


console.log(aficiones(users));