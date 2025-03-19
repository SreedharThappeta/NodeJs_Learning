
const https = require("https");

const fs = require("fs");

var a = 2948;
var b = 2234589;

setTimeout(() => {console.log("5 sec Completed")}, 5000);

https.get("https://dummyjson.com/products/1",
    (res) => {
        console.log(res?.secret);
        console.log("Done");
    }
)


console.log(a*b);

