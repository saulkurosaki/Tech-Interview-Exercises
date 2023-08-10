const { invert } = require('./ejercicio4');
const { invertir } = require('./ejercicio4');

test('La funcion invert este definida', () => {
    expect(invert).toBeDefined();
});

test('La funcion invertir este definida', () => {
    expect(invertir).toBeDefined();
});

test('Invert devuelva "sedeup euq se is emetreivnI"', () => {
    expect(invert('Invierteme si es que puedes')).toBe('sedeup euq se is emetreivnI');
});

test('Invertir devuelva "sederaP luaS yos aloH"', () => {
    expect(invertir('Hola soy Saul Paredes')).toBe('sederaP luaS yos aloH');
});