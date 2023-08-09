
//Ejercicio5: Cuanto es el X porciento de un X numero?

const percentage = (percentage, num) => {
    const operation = (percentage / 100) * num;
    const result = 'El ' + percentage + '% de ' + num + ' es: ' + operation;

    return result;
};

console.log(percentage(43, 897));