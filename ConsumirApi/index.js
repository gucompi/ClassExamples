var xhr = new XMLHttpRequest();
var usuarios= {}; //Objeto Vacio ==> Sirve para inicalizar la variable. 
xhr.open("GET", "https://reqres.in/api/users?page=2", true);
xhr.onload = function(){
    respuesta=JSON.parse(xhr.responseText)
    console.log(respuesta)
    var tabla= document.querySelector("#tbody")
    var StringAApendear = "";
    respuesta.data.forEach(function(usuario){
        
        StringAApendear = StringAApendear +'<tr>'+
                                '<th scope="row">'+usuario.id+'</th>' +
                                '<th>'+usuario.email+'</th>' +
                                '<th>'+usuario.first_name+'</th>' +
                                '<th>'+usuario.last_name.substring(0,2)+'</th>' +
                                '<th><img width="20px" height="20px" src="'+usuario.avatar+'"/></th>' +
                            '</tr>'
    })
    
    tabla.innerHTML=StringAApendear;
                  
};
xhr.send();



/*
var prompt=window.prompt("Ingresa numero, luego te diremos si es primo o no ");
var numeroNormalizado= Number.parseInt(eval(prompt))
if(!Number.isNaN(numeroNormalizado)){
    AnalizarSiEsPrimo(numeroNormalizado) == true ? console.log("Es primo"): console.log("No es Primo")
}else{
    alert("No puse un numero capo")
}



function AnalizarSiEsPrimo (numero){
    for(var i = 2 ; i < numero - 1 ; i++){
        if(numero % i ==0) return false
    }
    return true
}



*/
