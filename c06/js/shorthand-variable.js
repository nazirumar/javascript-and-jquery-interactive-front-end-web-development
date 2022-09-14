/*  
SHORTHAND FOR
CREATING VARIABLES
*/



//  ***************** (1)
var price = 5;
var quantity = 14;
var total = price * quantity

//  ***************** (2)

var price , quantity, total;

price = 5;
quantity =14;
total = price * quantity




//  ***************** (3)

var price = 5, quantity =14;
var total = price * quantity;


//  ***************** (4)


var el = document.getElementById('cost');
el.textContent='$' + total
