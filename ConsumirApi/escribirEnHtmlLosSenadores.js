console.log(data.results)


var h1 = document.createElement("h1")
h1.innerText="Lista de senadores!"
document.body.appendChild(h1)

var tabla= document.querySelector("#tbody")
var StringAApendear = "";
data.results[0].members.forEach(function(miembro){
    
    StringAApendear = StringAApendear +'<tr>'+
                            '<th scope="row">'+miembro.youtube_account+'</th>' +
                            '<th>'+miembro.total_votes+'</th>' +
                            '<th>'+miembro.missed_votes+'</th>' +
                            '<th>'+miembro.ideal_point+'</th>' +
                            '<th><a src="'+miembro.twitter_account+'">'+miembro.twitter_account+'</a></th>' +
                        '</tr>'
})


tabla.textContent=StringAApendear;
