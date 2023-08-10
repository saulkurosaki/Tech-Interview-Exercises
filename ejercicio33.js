
//Ejercicio33: Realiza un reloj que en tiempo real vaya mostrando la hora a cada segundo.
//             Solo puedes utilizar el objeto date para conseguir la hora por primera vez,
//             pero no para actualizar la hora.

//Como hacerlo: 
//-Crear una clase
//-Inicializar propiedades con la hora actual
//-Metodo con setInterval
//-Metodo para mostrar la hora
//-Metodo para sumar segundos a la hora y actualizar horas, minutos y segundos


//Solución 1: Ejecutando el objeto Date en cada intervalo
const relojRapido = () => {
    setInterval(() => {
        const fecha = new Date();
        const horas = fecha.getHours();
        const minutos = fecha.getMinutes();
        const segundos = fecha.getSeconds();

        console.log(horas + ':' + minutos + ':' + segundos);
    }, 1000);
};

// relojRapido();



//Solución 2: Sin usar el objeto Date en cada intervalo. Usando una clase, constructor y métodos de objetos
class Reloj {
    constructor(){
        this.fecha = new Date();
        this.horas = this.fecha.getHours();
        this.minutos = this.fecha.getMinutes();
        this.segundos = this.fecha.getSeconds();
    };

    actualizar(segundos){
        this.segundos += segundos;

        //Actualizar segundos
        if(this.segundos >= 60){
            this.minutos++;
            this.segundos = 0;
        };

        //Actualizar minutos
        if(this.minutos >= 60){
            this.horas++;
            this.minutos = 0;
        };

        //Actualizar horas
        if(this.horas >= 24){
            this.horas = 0;
        };

    };

    mostrar(){
        this.actualizar(1);
        console.log(this.horas + ':' + this.minutos + ':' + this.segundos);
    };

    encender(){
        setInterval(() => {
            this.mostrar();
        }, 1000);
    };

};


let miReloj = new Reloj();
miReloj.encender();