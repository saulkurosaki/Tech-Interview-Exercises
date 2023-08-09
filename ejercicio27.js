
//Ejercicio27: Dado un numero, mostrar a cuantos años, meses y días equivalen

const calcularDias = (days) => {

    let años = Math.floor(days/365);
    let meses = Math.floor((days%365)/30);
    let días = Math.floor((days%365)%30);
    
    const result = days + ' días \n' + 'Equivale a: ' + años + ' años, ' + meses + ' meses y ' + días + ' días.';

    return result;
};


console.log(calcularDias(20920));