const coincidencias = require('./ejercicio3');

test('La funcion coincidencias este definida', () => {
    expect(coincidencias).toBeDefined();
});

test('Se encuentren 3 coincidencias de la palabra "frase" en el texto', () => {
    expect(coincidencias('Hola, soy una FRASE de prueba, con este curso aprenderás e implementaras bastante tu lógica de programación y FRASE tras FRASE, podrás ser mucho mejor.'
    , 'frase')).toBe(3);
});

test('Se encuentren 5 coincidencias de la palabra "pizza" en el texto', () => {
    expect(coincidencias('Soy Saul Paredes, amante de la pizza, creo que no hay nada mejor que la pizza, la pizza me vuelve loco, la pizza les gusta a todos, la pizza es lo mejor.'
    , 'pizza')).toBe(5);
});