// default in protected access

 var x = 69;
  
function exponent(x, y)
{
    return x**y;
}

console.log(exponent(2,11));

// module.exports = {x:x, exponent:exponent}
module.exports = {x, exponent};