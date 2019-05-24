/*ES2015  */

class Foo {
  #bar = '';
  constructor(val){
      this.#bar = val;
  }
  getBar(){
      return this.#bar
  }
  setBar(val){
      this.#bar=val
  }
}


/*Ecma 6 */


function Foo(a) {
    var bar = a;                              // private instance data

    this.getBar = function() {return(bar);}   // methods with access to private variable
    this.setBar = function(a) {bar = a;}
}

var x = new Foo(3);
var y = x.getBar();   // 3
x.setBar(12);
var z = x.bar;        // not allowed (x has no public property named "bar")