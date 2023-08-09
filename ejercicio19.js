
//Ejercicio19: Dado un array de objetos de peliculas (titulo, año y vista)
//             mostrar todas las peliculas que hayas visto y cuales no

const peliculas = [
    {
        titulo: 'El Señor de los anillos',
        año: '1998',
        vista: false,
    },
    {
        titulo: 'Avengers: Infinity War',
        año: '2016',
        vista: true,
    },
    {
        titulo: 'Los Juegos del Hambre',
        año: '2013',
        vista: true,
    },
    {
        titulo: 'Avengers: Endgame',
        año: '2017',
        vista: true,
    },
    {
        titulo: 'El Padrino',
        año: '1995',
        vista: false,
    },
];

const misPeliculas = (peliculas) => {

    let vistas = [];
    let peliculasVistas = '-Ya has visto:';

    let noVistas = [];
    let peliculasNoVistas = '-Te faltan por ver:';

    for(peli of peliculas){

        if(peli.vista){
            vistas.push(peli); //Si evalúa en True
        }else{
            noVistas.push(peli); //Si evalúa en False
        };

    };
    
    for(peli of vistas){
        peliculasVistas += '\n' + peli.titulo + ' de ' + peli.año + '.';
    };

    for(peli of noVistas){
        peliculasNoVistas += '\n' + peli.titulo + ' de ' + peli.año + '.';
    };

    let resultado = peliculasVistas + '\n \n' + peliculasNoVistas;

    return resultado;
};


console.log(misPeliculas(peliculas));