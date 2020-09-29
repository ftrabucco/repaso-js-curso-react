// Métodos en arreglos

const personas =[
    {nombre: "Juan", edad:20, aprendiendo:"JavaScript"},
    {nombre: "Pablo", edad:32, aprendiendo:"Python"},
    {nombre: "Alejandra", edad:18, aprendiendo:"PHP"},
    {nombre: "Luis", edad:40, aprendiendo:"Java"},
    {nombre: "Roberto", edad:19, aprendiendo:"Java"}
]

console.log(personas);

//mayores de 28 años

const mayores = personas.filter(persona=>{
    return persona.edad>28;
});

console.log(mayores);

// que aprende alejandra y su edad
const alejandra = personas.find(persona=>{
    return persona.nombre === 'Alejandra';
});
console.log("Alejandra esta aprendiendo: " + alejandra.aprendiendo);

let total = personas.reduce((edadTotal, persona) =>{
    return edadTotal + persona.edad;
},0);

console.log("promedio de edad: " + total/personas.length)
console.log(total)