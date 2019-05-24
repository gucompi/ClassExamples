'' == '0' // false    
0 == '' // true
0 == '0' // true

false == 'false' // false 
false == '0' // true

false == undefined // false 
false == null // false 
null == undefined // true

' \t\r\n ' == 0 // true

parseInt("8"); //8
parseInt("08"); //0

parseInt("8", 10); //8
parseInt("08", 10); //8


typeof {} === "object" //true
typeof "" === "string" //true
typeof [] === "array"; //false


typeof new Number(123); // "object"
typeof Number(123); // "number"
typeof 123; // "number"


0.1 + 0.2 === 0.3 //false



a === b; //true
1/a === 1/b; //false



/*Funciona*/
for(var i=0; i<10; i++) {
    console.log(i);
}
var i;
console.log(i); // 10

/*No funciona*/
(function (){
    for(var i=0; i<10; i++) {
        console.log(i);
    }
}());
var i;
console.log(i); // undefined




typeof NaN === "number" //true


NaN === NaN; // false


