'use strict'
var http = require("http");
var XMLHttpRequest = require("xmlhttprequest")

  /* Create an HTTP server to handle responses */

  http.createServer(function(request, response) {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
          
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(this.responseText);
        response.end();

      }
    });
    
    xhr.open("GET", "http://pilote.techo.org/?do=api.getPaises");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.send();
  }).listen(8888);