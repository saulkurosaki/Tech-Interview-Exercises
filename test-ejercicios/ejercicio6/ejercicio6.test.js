const cuadrado = require('./ejercicio6');

test('La funcion cuadrado este definida', () => {
    expect(cuadrado).toBeDefined;
});

test('Devuelva un cuadrado hueco de 4 filas', () => {
    expect(cuadrado(4)).toBe('****\n*  *\n*  *\n****');
});

test('Devuelva un cuadrado hueco de 8 filas', () => {
    expect(cuadrado(8)).toBe('********\n*      *\n*      *\n*      *\n*      *\n*      *\n*      *\n********');
});