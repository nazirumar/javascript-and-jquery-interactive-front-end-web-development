/*  
USING A QOUTES INSIDE
A STRING
*/

var title;
var message;

title = "Molly's Special Offers";
message = '<a href=\"sale.html\"> 25% Off </a>';


var elTitle = document.getElementById('title');
elTitle.textContent=title;
var elNote = document.getElementById('note');
elNote.innerHTML=message;