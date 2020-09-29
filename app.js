
// Object literal
const persona={
    nombre:"Juan",
    profesion:"Desarrollador Web",
    edad:34
}

//console.log(persona)
/*
const mostrarCliente=mostrarInformacionTarea(persona.nombre,
    persona.profesion)
console.log(mostrarCliente)*/

// Object Construtctor
function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}

//Agregar un prototype a tarea:
Tarea.prototype.mostrarInformacionTarea = function (){
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}


// Crear nuevas tareas:
const tarea1 = new Tarea("Aprender JavaScript y React", "Urgente");
const tarea2 = new Tarea("Pasear al perro", "Media");
console.log(tarea1);
console.log(tarea2);
console.log(tarea1.mostrarInformacionTarea());
console.log(tarea2.mostrarInformacionTarea());













