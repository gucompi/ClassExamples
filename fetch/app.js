 /*Creamos un Request con Header */
 var request = new Request('https://api.propublica.org/congress/v1/113/senate/membears.json', {
    headers: new Headers({
        'Content-Type': 'application/json',
        'X-API-Key':'--ApiKey--'
    })
});

/*Fetch Devuelve una promesa. */
fetch(request).then(function(res) {
    /*Resolvemos la Promesa */
    return res.json()  
}).then((res)=>{
    //Aca tenemos los datos de la Promesa
    console.log(res)
});