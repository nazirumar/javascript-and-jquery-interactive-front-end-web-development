/*  
  Create Variable for the welcome message
*/


var greeting ='Howdy';
var name = 'Nazir';
var message = 'please chech your order';

//  Concatenate three variable above to create te message
var welcome = greeting + name + message;


// Create variable to build details about the sign

var sign = 'Montage House';
var tiles = sign.length;
var subtotal = tiles * 5;
var shipping = 7;
var grandtotal = subtotal + shipping;


// Get Element that has an id of greeing;
var el = document.getElementById('greeting');
// Replace  the content of that element  with the personalized welcome message

el.textContent = welcome;


// Get element that has an id of userSign then update its contents
var elSign = document.getElementById('usersign');
elSign.textContent = sign;



// Get element that has an id of tiles then update its contents
var elTiles= document.getElementById('tiles');
elTiles.textContent = tiles;



// Get element that has an id of Subtotal then update its contents
var elsubtotal = document.getElementById('subtotal');
elsubtotal.textContent = subtotal;



// Get element that has an id of Shipping then update its contents
var elsh = document.getElementById('shipping');
elsh.textContent = shipping;

//  Get element that has an id of grandtotal then update its contents
var elgrandtotal = document.getElementById('grandtotal');
elgrandtotal.textContent ='$' + shipping;


