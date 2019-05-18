var xhr = new XMLHttpRequest();
xhr.open("put", "https://reqres.in/api/users", true);
xhr.body={
    "name": "morpheus",
    "job": "zion resident"
}
xhr.onload = function(){
    console.log(xhr.responseText);
};
xhr.send();
		