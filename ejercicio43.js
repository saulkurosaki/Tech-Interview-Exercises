
//Ejercicio43: Dado un array de números, sacar la media de todos ellos

const media = (arr) => {

    let sum = 0;

    for(el of arr){

        sum += el;

    };

    const result = sum / arr.length;

    return result;
};


console.log(media([8, 9, 4.5, 10, 10, 10, 7])); //Result = 8.357142857142858