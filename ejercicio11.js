
//Ejercicio11: Dado un texto y una busqueda, devolver todas las 
//             coincidencias de la busqueda con el texto [-CENSURADO-]

const censurado = (text=false, search=false) => {
    let resultado = '';

    if(!text && !search){
        resultado = 'No se puede leer el texto y la busqueda, ya que faltan los dos parametros';
    }else if(!text && search){
        resultado = 'No se puede leer el texto, ya que falta el texto';
    }else if(text && !search){
        resultado = 'No se puede hacer la busqueda, ya que falta la palabra a buscar';
    }else if(text && search){
        if(text.includes(search)){
            resultado = text.replace(new RegExp(search, 'gi'), '[-CENSURADO-]')
            resultado += '\n La palabra encontrada a censurar fue: ' + search;
        }else{
            resultado = 'No se encontró ninguna coincidencia. \n Texto: ' + text + '\n Palabra a buscar: ' + search;
        };
    };

    return resultado;
};


console.log(censurado('Este es un texto de prueba para hacer la prueba de censurar palabras, tal como prueba en esta prueba es la palabra de prueba', 'prueba'));