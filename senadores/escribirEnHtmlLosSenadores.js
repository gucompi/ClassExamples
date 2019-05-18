var tabla= document.querySelector("#tbody")
function CargarTabla(criterio){
    var StringAApendear = "";
    if(!criterio || criterio == '' ) {
        data.results[0].members.forEach(function(miembro){    
        StringAApendear = StringAApendear +'<tr>'+
                                '<th scope="row">'+miembro.youtube_account+'</th>' +
                                '<th>'+miembro.total_votes+'</th>' +
                                '<th>'+miembro.missed_votes+'</th>' +
                                '<th>'+miembro.ideal_point+'</th>' +
                                '<th><a src="'+miembro.twitter_account+'">'+miembro.twitter_account+'</a></th>' +
                            '</tr>'
      })
    }else {
        
        criterio=criterio.toLowerCase();
        var arrFiltrado = data.results[0].members.filter(
            function(miembro){
                if( !miembro.youtube_account || !miembro.total_votes || !miembro.last_name || !miembro.first_name) return false
                return miembro.youtube_account.toLowerCase().indexOf(criterio) !=-1 || 
                miembro.total_votes == criterio ||
                miembro.last_name.toLowerCase().indexOf(criterio) !=-1 || 
                miembro.first_name.toLowerCase().indexOf(criterio) !=-1
            }
        )
        arrFiltrado.forEach(function(miembro){
            StringAApendear = StringAApendear +'<tr>'+
                '<th scope="row">'+miembro.youtube_account+'</th>' +
                '<th>'+miembro.total_votes+'</th>' +
                '<th>'+miembro.missed_votes+'</th>' +
                '<th>'+miembro.ideal_point+'</th>' +
                '<th><a src="'+miembro.twitter_account+'">'+miembro.twitter_account+'</a></th>' +
            '</tr>'
        })
    }
    tabla.innerHTML=StringAApendear;
}
$(document).ready(function(){ CargarTabla()})
$("#buscador").blur(
    function(event){
        CargarTabla(event.target.value)}
        )   


