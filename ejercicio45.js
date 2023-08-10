
//Ejercicio45: Dado un array de alumnos (nombre y nota), mostrar cuantos alumnos estan
//             suspensos y cuantos aprobados

const suspensos = (students) => {

    let approved = [];
    let failed = [];

    for(let student of students){

        if(student[1] >= 6){

            student.push('Approved');
            approved.push(student);

        }else{

            student.push('Failed');
            failed.push(student);

        };

    };

    return [
        students,
        'Aprobados: ' + approved.length,
        'Reprobados: ' + failed.length,
    ];
};


console.log(suspensos([
    ['Juan', 10],
    ['Alfonsina', 10],
    ['Saul', 8.2],
    ['Giovanni', 4.1],
    ['Ernesto', 9.9],
    ['Fernanda', 5.9],
    ['Raul', 3],
    ['Gerardo', 6],
]));