
//Ejercicio 35: Dado un array, crear otro con el primer y ultimo elemento del original

const primeroYultimo = (arr) => {

    let newArr = [];
    newArr.push(arr[0], arr[arr.length-1]);

    return newArr;
};


console.log(primeroYultimo([144, 255, 366, 477, 588, 699]));