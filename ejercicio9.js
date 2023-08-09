
//Ejercicio9: Dado dos arrays, devolver array con tan solo los elementos comunes entre ellos

//Forma 1
const elementosComunes = (arr1, arr2) => {
    let common = [];

    for(x of arr1){

        for(y of arr2){

            if(x === y && !common.includes(x)){
                common.push(x);
            };

        };

    };

    const result = 'Las coincidencias encontradas entre los dos arrays otorgados fueron: ' + common;

    return result;
};

//Forma2
const commonElements = (arr1, arr2) => {
    const common = arr1.filter(num => arr2.includes(num));
    const result = 'Las coincidencias encontradas entre los dos arrays otorgados fueron: ' + common;

    return result;
};


console.log(elementosComunes([1,3,5,7,9], [4,4,4,7,2,9,1,9,6,9]));
console.log(commonElements([1,3,5,7,9], [4,4,4,7,2,9,1,9,6,9]));