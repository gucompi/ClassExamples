var marcadorDeGabriela = {
    "color":"Rojo",
    "trazo":1.5,
    "marca":"edding",
    "nivelDeTinta":98
};
var marcadorDeGabriel = {
    "color":"Negro",
    "trazo":1.5,
    "marca":"edding",
    "nivelDeTinta":80
};

console.log(marcadorDeGabriela.color);
marcadorDeGabriela.color='Naranja'
console.log(marcadorDeGabriela.color);
console.log(marcadorDeGabriel.color);

var arrayDeMarcadores = [marcadorDeGabriel,marcadorDeGabriela];


marcadorDeGabriel.color="'Verde'";

console.log(arrayDeMarcadores);
console.clear()

var gabriel = {
    nombre:"Gabriel",
    apellido:"Cisilino"
}

var gustavo = {
    nombre:"Gustavo",
    apellido:"Compiano"
}

marcadorDeGabriel.duenios=[gabriel,gustavo]
console.log(marcadorDeGabriel.duenios[0].edad=50)

marcadorDeGabriel.duenios.forEach((duenio)=>{
    console.log("duenio")
    console.log(duenio.edad)
})



console.log(arrayDeMarcadores)

