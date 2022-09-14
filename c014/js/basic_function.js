/*  
  A BASIC FUNCTION
    In this example, the user is shown a message at the top of the page.
    The message is held in an HTML element whose id attribute has a
    value of message. The message is going to be changed using
    JavaScript.
    Before the closing </body> tag, you can see the link to the JavaScript
    file. The JavaScript file starts with a variable used to hold a new
    message, and is followed by a function called updateMessage().
    You do not need to worry about how this function works yet - you will
    learn about that over the next few pages. For the moment, it is just
    worth noting that inside the curly braces of the function are two
    statements.
*/


var msg ='Sign up to receive our news letter for 10% off!';

function UpdateMessage() {
  var el = document.getElementById('message');
  el.textContent= msg
  
}

UpdateMessage();

/* 

  These statements update the message at the top of the page. The
  function acts like a store; it holds the statements that are contained in
  the curly braces until you are ready to use them. Those statements are
  not run until the function is called. The function is only called on the
  last line of this script.
*/


/* 
DECLARING A FUNCTION
    To create a function, you give it a name and then
    write the statements needed to achieve its task
    inside the curly braces.
    This is known as a function declaration.
    You declare a function using the function keyword.
    You give the function a name (sometimes called an identifier)
    followed by parentheses.
    The statements that perform the task sit in a code block. (They are
    inside curly braces.)

*/

/* 
This function is very basic (it only contains one statement), but it
  illustrates how to write a function. Most functions that you will see or
  write are likely to consist of more statements.
  The point to remember is that functions store the code required to
  perform a specific task, and that the script can ask the function to
  perform that task whenever needed.
  If different parts of a script need to perform the same task, you do not
  need to repeat the same statements multiple times - you use a function
  to do it (and reuse the same code).
  CALLING A FUNCTION
  Having declared the function, you can then
  execute all of the statements between its curly braces with just one line of code. This is known as
  calling the function.
  To run the code in the function, you use the function name followed by
  parentheses.
  In programmer-speak, you would say that this code calls a function.
  You can call the same function as many times as you want within the
  same JavaScript file.

      
*/

/*
1. The function can store the instructions for a specific task.
2. When you need the script to perform that task, you call the function.
3. The function executes the code in that code block.
4. When it has finished, the code continues to run from the point where
it was initially called.


*/


function sayHello() {
  document.write('Hello');
}
sayHello()

/*
  Sometimes you will see a function called before it has been declared.
  This still works because the interpreter runs through a script before
  executing each statement, so it will know that a function declaration
  appears later in the script. But for the moment, we will declare the
  function before calling it.

*/


/*
DECLARING FUNCTIONS
  THAT NEED INFORMATION
  Sometimes a function needs specific information
  to perform its task. In such cases, when you
  declare the function you give it parameters.
  Inside the function, the parameters act like
  variables.
  If a function needs information to work, you indicate what it needs to know in parentheses after the function name.
  The items that appear inside these parentheses are known as the
  parameters of the function. Inside the function those words act like
  variable names.

*/


function getArea(width, height) {
  return width * height;
}

/* 
  This function will calculate and return the area of a rectangle. To do
  this, it needs the rectangle's width and height. Each time you call the
  function these values could be different.
  This demonstrates how the code can perform a task without knowing
  the exact details in advance, as long as it has rules it can follow to
  achieve the task.
  So, when you design a script, you need to note the information the
  function will require in order to perform its task.
  If you look inside the function, the parameter names are used just as
  you would use variables. Here, the parameter names width and height
  represent the width and height of the wall.


*/


/*
CALLING FUNCTIONS THAT
  NEED INFORMATION
  When you call a function that has parameters, you
  specify the values it should use in the parentheses
  that follow its name. The values are called
  arguments, and they can be provided as values or
  as variables.
  ARGUMENTS AS VALUES
  When the function below is called, the number 3 will be used for the
  width of the wall, and 5 will be used for its height.

*/

getArea(3, 5)


/*
ARGUMENTS AS VARIABLES
  You do not have to specify actual values when calling a function - you
  can use variables in their place. So the following does the same thing.

*/

var wallWidth = 3, wallHeight =5;
getArea(wallWidth, wallHeight)


/*
PARAMETERS VS ARGUMENTS
  People often use the terms parameter and argument interchangeably,
  but there is a subtle difference.
  On the left-hand page, when the function is declared, you can see the
  words width and height used (in parentheses on the first line). Inside
  the curly braces of the function, those words act like variables. These
  names are the parameters.
  On this page, you can see that the getArea() function is being called
  and the code specifies real numbers that will be used to perform the
  calculation (or variables that hold real numbers).
  These values that you pass into the code (the information it needs to
  calculate the size of this particular wall) are called arguments.
  GETTING A SINGLE VALUE
  OUT OF A FUNCTION
  Some functions return information to the code that
  called them. For example, when they perform a
  calculation, they return the result.

  This calculateArea() function returns the area of a rectangle to the
  code that called it.
  Inside the function, a variable called area is created. It holds the
  calculated area of the box.
  The return keyword is used to return a value to the code that called
  the function.


*/

function calculateArea(width, height) {
  var area = width * height;
  return area;
}

var wallOne = calculateArea(3, 5)
var wallTwo = calculateArea(8, 5)
// console.log(wallOne);
/*
  Note that the intrepreter leaves the function when return is used. It
  goes back to the statement that called it. If there had been any
  subsequent statements in this function, they would not be processed.
  The wallOne variable holds the value 15, which was calculated by the
  calculateArea() function.
  The wallTwo variable holds the value 40, which was calculated by the
  same calculateArea() function.
  This also demonstrates how the same function can be used to perform
  the same steps with different values.

*/


/*
GETTING MULTIPLE VALUES OUT OF A FUNCTION
  Functions can return more than one value using an
  array. For example, this function calculates the
  area and volume of a box.
  First, a new function is created called getSize(). The area of the box
  is calculated and stored in a variable called area.
  The volume is calculated and stored in a variable called volume. Both
  are then placed into an array called sizes.
  This array is then returned to the code that called the getSize()
  function, allowing the values to be used.

*/

function getSize(width, height, depth) {
  var area = width * height;
  var volume = width * height * depth;
  var sizes = [area, volume];

  return sizes;
}

var areaOne = getSize(3, 2, 3)[0];
var volumeOne = getSize(3, 2, 3)[1];
// console.log(volumeOne,'|', areaOne);

/*
ANONYMOUS FUNCTIONS & FUNCTION EXPRESSIONS:
  Expressions produce a value. They can be used
  where values are expected. If a function is placed
  where a browser expects to see an expression, (e.g.,
  as an argument to a function), then it gets treated as
  an expression.


*/

/*
FUNCTION EXPRESSION
  If you put a function where the interpreter would expect to see an
  expression, then it is treated as an expression, and it is known as a
  function expression. In function expressions, the name is usually
  omitted. A function with no name is called an anonymous function.
  Below, the function is stored in a variable called area. It can be called
  like any function created with a function declaration.

*/

var area = function (width, height) {
  return width * height;
  
};

var size = area(3, 4);
// console.log(size);

/*
 IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
    This way of writing a function is used in several
    different situations. Often functions are used to
    ensure that the variable names do not conflict with
    each other (especially if the page uses more than one
    script).

*/

/*
IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
    Pronounced “iffy,” these functions are not given a name. Instead, they are
    executed once as the interpreter comes across them.
    Below, the variable called area will hold the value returned from the
    function (rather than storing the function itself so that it can be called
    later).
*/

var area = (function() {
  var width = 3;
  var height = 2;
  return width * height;
}())

// console.log(area);

/*
    The final parentheses (shown on green) after the closing curly brace of
    the code block tell the interpreter to call the function immediately. The
    grouping operators (shown on pink) are parentheses there to ensure the
    intrepreter treats this as an expression.
    You may see the final parentheses in an IIFE placed after the closing
    grouping operator but it is commonly considered better practice to place
    the final parentheses before the closing grouping operator, as shown in the
    code above.
    WHEN TO USE ANONYMOUS FUNCTIONS
    AND IIFES
    You will see many ways in which anonymous function expressions and
    IIFEs are used throughout the book.
    They are used for code that only needs to run once within a task, rather
    than repeatedly being called by other parts of the script. For example:
    As an argument when a function is called (to
    calculate a value for that function).
    To assign the value of a property to an object.
    In event handlers and listeners (see Chapter 6) to
    perform a task when an event occurs.
    To prevent conflicts between two scripts that
    might use the same variable names (see p99).
    IIFEs are commonly used as a wrapper around a set of code. Any
    variables declared within that anonymous function are effectively
    protected from variables in other scripts that might have the same name.
    This is due to a concept called scope, which you meet on the next page. It
    is also a very popular technique with jQuery.

*/