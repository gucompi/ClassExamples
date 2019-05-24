class Fibron {
    constructor(
        marca,color,trazo,isUsado,duenios
    ){
        this.marca=marca
        this.color=color
        this.trazo=trazo
        this.isUsado=isUsado
        this.duenios=duenios
        this.carga=100
    }

    Escribir(texto){
        console.log("Soy un fibron Marca" +  this.marca)
    }
    CambiarDuenio(duenios){
        this.duenios=duenios;
    }
    static HolaMundo(){
        console.log("hola Mundo")
    }

}

var fibronNegro = 
new Fibron('Edding','Negro',0.2, false ,['Gustavo','Fernando'])
var fibronRojo = 
new Fibron('Edding','Rojo',0.2, false ,['Gustavo','Fernando'])


/*
var fibronRojo = {
    color:'Rojo',
    marca:'Edding',
    trazo:0.3,
   
}
*/