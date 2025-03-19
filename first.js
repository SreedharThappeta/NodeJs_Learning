require("./another.js");

var a = 10;
var b = 20;
console.log("Hello World!!!");
console.log(a+b); 
console.log(global);
console.log(this);
console.log(globalThis);
console.log(this === globalThis);
console.log(this === global);
console.log(globalThis === global);
console.log("hello world!")

const calculatesum = require("./another");

console.log(calculatesum(10,20));

const obj = require("./module_export.js");

const {x, exponent} = require("./module_export");

console.log(x,obj.x);

