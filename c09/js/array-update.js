/*  
ACCESSING & CHANGING
VALUES IN AN ARRAY
*/



var Colors;
Colors = ['white', 'black', 'custom'];

var el = document.getElementById('colors')
el.textContent = Colors;
// Update
var Colors2;
Colors2 = ['white', 'black', 'custom'];

Colors2[1] = "green"
var el = document.getElementById('colors2')
el.textContent = Colors2;



// The first lines of code on the left create an array containing a list of
// three colors. (The values can be added on the same line or on separate
// lines as shown here.)