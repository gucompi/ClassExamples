// ES5
var obj = {
    id: 42,
    counter: function counter() {
      setTimeout(function() {
        console.log(this.id);
      }.bind(this), 1000);
    }
  };


  // ES6
var obj = {
    id: 42,
    counter: function counter() {
      setTimeout(() => {
        console.log(this.id);
      }, 1000);
    }
  };




  //Template String's

  var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`




//var
var i = "global";
function foo() {
    var i = "local"; // Otra variable local solo para esta función
    console.log(i); // local
}
foo();
console.log(i); // global


function foo() {
    let i = 0;
    if(true) {
        let i = 1; // Sería otra variable i solo para el bloque if
        console.log(i); // 1
    }
    console.log(i); // 0
}
foo();



function timeout(duration = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    })
}

var p = timeout(1000).then(() => {
    return timeout(2000);
}).then(() => {
    throw new Error("hmm");
}).catch(err => {
    return Promise.all([timeout(100), timeout(200)]);
})



