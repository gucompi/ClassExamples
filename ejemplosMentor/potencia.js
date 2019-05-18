/*
*   Implementar  Potencia de un NUMRO SOBRE OTRO SIn usar POW, ni multiplicaciones
*   
*   Base^exponete
*/

/* JS incluye una funcion de la clase Math llamada "pow" 
*   La misma acepta dos parametros = (Base,exponete)
 */

 /*La potencia de 3 sobre 4 es = 3*3*3*3  ==> "3 (4-1) multiplicaciones" ==> (PARTE A)*/ 

 /*La multiplicacion 3*3 es = 3+3+3  ==> "2 (3-1) sumas" ==> (PARTE B) */



 /*Declaro una funcion llamada "Hallar Potencia"  que acepta dos parametros: "base" y "exponete"*/

 function HallarPotencia(base,exponete){
    /*Variable para luego retornar el resultado */
    var resultado = 0;

    /*Empezamos el algoritmo controlando SOLO LA POSITIVIDAD del numero "Base" */
    /*Para obtener la "PARTE ENTERA" de un numero se usa la funcion ABS (De Absoluto) de la clase Math. */

    var baseAbsoluta = Math.abs(base);
    
    /*Voy a necesitar usar el exponente luego, asi que lo almaceno en otra variable! */
    var exponente2=exponete;
    
    /*Recorro de manera inversa el exponente hasta llegar a 1. Asi logro tener exponente -1 iteraciones (PARTE A) */
    while(exponete>1){
        /*Tengo un sumador donde voy sumando cada iteracion*/
        var agregado = 0;
        /*Itero base-1 veces (PARTE B) sumando */
        for(var i=0;i<Math.abs(base);i++) agregado+=baseAbsoluta;

        /*Asigno el sumador del bucle For de arriba en el resultado total (baseAbsoluta) ==> En este caso, podria haber creado otra variable para almacenar el resultado final, pero me parecia inutil... (Optimizacion)*/
        baseAbsoluta=agregado;

        /*Modifico la variable para que "salga del bucle" */
        exponete--;
    }
    /*Operador Ternario. Si una base de una potencia es negativo y el exponente es IMPAR, el resultado ES NEGATIVO. Los demas casos, es positivo.*/
    return (base < 0 && exponente2 % 2 === 1) ? -baseAbsoluta : baseAbsoluta;

    /*Equivalente sin operador Ternario:

        if(base < 0 && exponente2 %2 ===1){return -baseAbsoluta}
        else {return baseAbsoluta}
    */

 }


 /*Llamo por consola a la funcion... */
 console.log(HallarPotencia(-2, 3)); 

