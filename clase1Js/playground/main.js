/*INTRO*/
console.log("Starting javascript...")
/*EJERCICIO 1*/
var myName = "Gustavo"
console.log(myName)

/*EJERCICIO 2 */
var age = 22;
console.log(age);


/*Ejercicio 3 */

var ignasiAge = 32;
var ageDiff=0;
ageDiff = age  - ignasiAge;
console.log(ageDiff);

/*Ejercicio 4 */

if(age>21){
    //Mayor a 21!
    console.log("You are older than 21")
}
else{
    //Menor a 21!
    console.log("You are not older than 21")
}

/*Ejercio 5 */


if(age === ignasiAge){
    console.log("son iguales")
}
else{
    if(age > ignasiAge){
        console.log("Es mayor")
    }
    else{
        console.log("Es Menor")
    }
}



/* Actividad 3 */

/* Ejercicio 1 */

var arrayDeAlumnosYMentores = ["Gladys","Matias","Guada","Eliel","fernando"];

arrayDeAlumnosYMentores.sort();
/*Array ordenado */
console.log(arrayDeAlumnosYMentores)
/*Primera posicion*/
console.log(arrayDeAlumnosYMentores[0])

/*Ultima Posicion*/
console.log(arrayDeAlumnosYMentores[arrayDeAlumnosYMentores.length-1])

/*Mostrar todos los registros con un guail*/
var indice=0;
while(indice < arrayDeAlumnosYMentores.length){
    console.log(arrayDeAlumnosYMentores[indice])
    //indice=indice + 1;
    indice++;
}
/*Con For*/
console.log("Con Fort!")
for(var i = 0 ;i<arrayDeAlumnosYMentores.length;i++){

    console.log(arrayDeAlumnosYMentores[i])
}

var arrayEdadesDeAlumnosYMentores = [62,29,35,30,50];

arrayEdadesDeAlumnosYMentores.sort();
/*Array ordenado */
console.log(arrayEdadesDeAlumnosYMentores)
/*Primera posicion*/
console.log(arrayEdadesDeAlumnosYMentores[0])

/*Ultima Posicion*/
console.log(arrayEdadesDeAlumnosYMentores[arrayEdadesDeAlumnosYMentores.length-1])

/*Mostrar todos los registros con un guail*/
var indice2=0;
while(indice2 < arrayEdadesDeAlumnosYMentores.length){
    if(arrayEdadesDeAlumnosYMentores[indice2] % 2 ==0){
        
        console.log(arrayEdadesDeAlumnosYMentores[indice2])
        //indice2=indice2 + 1
    }
    indice2++;
}
/*Con For*/
console.log("Con Fortinate!")
for(var i = 0 ;i<arrayEdadesDeAlumnosYMentores.length;i++){
    if(arrayEdadesDeAlumnosYMentores[i] % 2 ==0){
        
        console.log(arrayEdadesDeAlumnosYMentores[i])
        //indice2=indice2 + 1
    }
}



function Menor(arr){
    var menor= arr[0];
    for(var i =1; i < arr.length;i++){
        if(arr[i]<menor){
            menor=arr[i]
        }
    }
   
    console.log(menor);
}


Menor(arrayEdadesDeAlumnosYMentores);



function Mayor(arr){
    var mayor= arr[0];
    for(var i =1; i < arr.length;i++){
        if(arr[i]>mayor){
            mayor=arr[i]
        }
    }
   
    console.log(mayor);
}


Mayor(arrayEdadesDeAlumnosYMentores);



function EncontrarElementoEnIndice(arr,indice){
    console.log(arr[indice])
}





function ConcatenarArray(arr){
    var arrayConcatenado = '';

    for(var i = 0 ; i < arr.length; i++){
        arrayConcatenado+='"'+arr[i]+'"'
        if(i!=arr.length-1) arrayConcatenado+=',';
    }
    
    return arrayConcatenado;
}
console.clear()
var palabra = ConcatenarArray(arrayDeAlumnosYMentores)
console.log(palabra)