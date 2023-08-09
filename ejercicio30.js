
//Ejercicio30: Dado un array de números, devolver el array sin elementos duplicados.
//             Si hay un String, eliminarlo del array.


//Normal Logic
const eliminarDuplicados = (arr) => {

    const onlyInt = arr.filter((el) => typeof el === 'number');
    const newArr = [];

    for(num of onlyInt){

        if(!newArr.includes(num)){
            newArr.push(num);
        };

    };

    return newArr;
};

//With the "new Set" statement
const noDuplicates = (arr) => {

    arr = arr.filter((el) => typeof el === 'number');

    let noDuplicates = new Set(arr);

    return Array.from(noDuplicates);
};


console.log(eliminarDuplicados(['saul',1,'paredes',2,1,1,1,'fano',3,'chanchito feliz',4]));
console.log('');
console.log(noDuplicates(['chanchito',1,'feliz',2,1,1,1,'chanchito felipe',3,'chanchito triste',4,5,6]));