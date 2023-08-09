
//Ejercicio13: Dado un array, dividirlo en tantos sub-arrays como sea necesario
//             basándonos en un numero que nos indique su tamaño

const divideArray = (arr, elements) => {

    let arrays = [];

    arr.forEach((el) => {
        
        let lastArr = arrays[arrays.length - 1];

        if(!lastArr || lastArr.length === elements){
            arrays.push([el]);
        }else{
            lastArr.push(el)
        };

    })

    return arrays;

};


console.log(divideArray([7, 4, 6, 3, 8, 8, 2, 3], 3));