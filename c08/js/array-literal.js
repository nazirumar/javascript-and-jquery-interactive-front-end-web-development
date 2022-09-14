/*  
ARRAYS
    An array is a special type of variable. It doesn't just
    store one value; it stores a list of values.
*/



var Colors;
Colors = ['white', 'black', 'custom'];

var el = document.getElementById('colors')
el.textContent = Colors[0];

var el = document.getElementById('colors1')
el.textContent = Colors[1];

var el = document.getElementById('colors2')
el.textContent = Colors[2];

var Color3;
Color3 = new Array('white', 'black', 'custom');
var elC = document.getElementById('colors3');
elC.innerHTML = Color3[0];


// ACCESSING ITEMS IN AN ARRAY
// To retrieve the third item on the list, the array name is specified along
// with the index number in square brackets.

var itemThree;
itemThree = Colors[2];
console.log(itemThree);


// NUMBER OF ITEMS IN AN ARRAY
// Each array has a property called length, which holds the number of items
// in the array.

var numColors;
numColors = Colors.length;
console.log(numColors);