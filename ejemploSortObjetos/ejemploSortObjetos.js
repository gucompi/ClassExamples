var objeto1 = {
    nombre:"Gus",
    edad:22
}
var objeto2 = {
    nombre:"Fer",
    edad:50
}
var objeto3 = {
    nombre:"Matias",
    edad:29
}
var objeto4 = {
    nombre:"Guada",
    edad:35
}

var personas = [objeto1,objeto2,objeto3,objeto4];


var personasOrdenadas = personas.sort((a,b)=>{return a.edad - b.edad})




console.log(personasOrdenadas)