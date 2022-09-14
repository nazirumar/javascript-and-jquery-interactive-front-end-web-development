/*  
  USING ARITHMETIC
    OPERATORS.
*/



var subtotal =(13 + 1 ) * 5;
var shipping = 0.5 * (13 + 1);



var total = subtotal + shipping;


var elSub = document.getElementById('subtotal');
elSub.textContent = 'Subtotal :$' + total;



var elship = document.getElementById('shipping');
elship.textContent ='Shipping :$'  + shipping

var eltotal = document.getElementById('total');
eltotal.textContent ='Grantotal :$' + total;