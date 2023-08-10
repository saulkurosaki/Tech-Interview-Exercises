const palindromo = require('./ejercicio2');

test('Comprobar si la funcion la funcion palindromo esta definida', () => {
    expect(palindromo).toBeDefined();
});

test('Es un Palindromo', () => {
    expect(palindromo('allivessevilla')).toEqual(true);
});

test('No es un Palindromo', () => {
    expect(palindromo('kurosaki')).toBe(false);
});