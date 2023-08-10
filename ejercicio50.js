
//Ejercicio50: Dado un numero, devolver cuantos bucles tiene.
//             Un numero tiene un bucle cuando tiene un circulo cerrado cuando lo dibujas.
//             Por lo que 6 tiene un bucle, 1 no tiene ningún bucle y 8 tiene 2 bucles.

const bucles = (num) => {

    let bucles = 0;

    for(char of num.toString()){

        char = parseInt(char);

        if(char === 0){
            bucles++
        }else if(char === 6){
            bucles++
        }else if(char === 8){
            bucles += 2;
        }else if(char === 9){
            bucles++
        };

    };

    const result = 'El numero: ' + num + ' tiene un total de: "' + bucles + '" bucles';

    return result;
};


console.log(bucles(288614755208)); //8 bucles