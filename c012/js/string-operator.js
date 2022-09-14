/*  
  USING STRING OPERATOR
    OPERATORS.



  There is just one string operator: the + symbol. It is
    used to join the strings on either side of it.
*/


/*

There are many occasions where you may need to join two or more
strings to create a single value. Programmers call the process of joining
together two or more strings to create one new string concatenation.

  For example, you might have a first and last name in two separate
variables and want to join them to show a full name. In this example, the
variable called fullName would hold the string ‘Ivy Stone’.

*/


var firstName ='IVY';
var lastName = 'Stone';
var fullName = firstName  +  lastName;

var elSub = document.getElementById('concatenation');
elSub.textContent = 'Concatenation :' + fullName;



/* 
MIXING NUMBERS AND STRINGS TOGETHER
  When you place quotes around a number, it is a string (not a numeric data
  type), and you cannot perform addition operations on strings.
*/

var cost1 ='7';
var cost2 ='9';
var total =cost1 + cost2;

// You would end up with a string saying ‘79’.


var elcost = document.getElementById('num_string');
elcost.textContent = 'Num_string :' + total;




/*

If you try to add a numeric data type to a string, then the number becomes
part of the string, e.g., adding a house number to a street name:

*/

var number = 12;
var street = 'IVY Road';
var add = number + street;

// You would end up with a string saying ‘12Ivy Road’.





/*
  If you try to use any of the other arithmetic operators on a string, then the
  value that results is usually a value called NaN. This means “not a
  number.”

*/



var score = 'seven';
var score2 = 'nine';
var totals = score * score2;

var elSub = document.getElementById('string_string');
elSub.textContent = 'string_string :' + totals;
// You would end up with the value NaN.



// USING STRING OPERATORS

var greeting = 'Howdy';
var name = 'Nazir';

var WelcomeMessage = greeting + name + '!';


var elgreet = document.getElementById('greeting');
elgreet.textContent =WelcomeMessage;

/*
This example will display a personalized welcome message on the
page.

The first line creates a variable called greeting, which stores the
message for the user. Here the greeting is the word Howdy.

The second line creates a variable that stores the name of the user.
 The
variable is called name, and the user in this case is Molly.

The personal welcome message is created by concatenating (or
joining) these two variables, adding an exclamation mark, and storing
them in a new variable called welcomeMessage.

Look back at the greeting variable on the first line, and note how
there is a space after the word Howdy. If the space was omitted, the
value of welcomeMessage would be "HowdyMolly!"


*/