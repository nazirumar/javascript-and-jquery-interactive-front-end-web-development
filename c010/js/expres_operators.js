/*  
    EXPRESSIONS
    An expression evaluates into (results in) a single
    value. Broadly speaking there are two types of
    expressions.
*/




/*

(1)
    EXPRESSIONS THAT JUST ASSIGN A VALUE
    TO A VARIABLE
    In order for a variable to be useful, it needs to be given a value. As you
    have seen, this is done using the assignment operator (the equals sign).

*/

var Color = 'beigen';

document.getElementById('exp1').innerText=Color

/*

    The value of color is now beige.
    When you first declare a variable using the var keyword, it is given a
    special value of undefined. This will change when you assign a value to
    it. Technically, undefined is a data type like a number, string, or Boolean.

*/


/*

(2)
    EXPRESSIONS THAT USE TWO OR MORE
    VALUES TO RETURN A SINGLE VALUE
    You can perform operations on any number of individual values (see next
    page) to determine a single value. For example:
*/

var area = 3 * 2;

document.getElementById('exp2').innerText=area


/*
    The value of area is now 6.
    Here the expression 3 * 2 evaluates into 6. This example also uses the
    assignment operator, so the result of the expression 3 * 2 is stored in the
    variable called area.

*/


// Another example where an expression uses two values to yield a single
// value would be where two strings are joined to create a single string.

/*
    OPERATORS
    Expressions rely on things called operators; they
    allow programmers to create a single value from one
    or more values.
 */

/*
    Covered in this chapter:
    ASSIGNMENT OPERATORS
    Assign a value to a variable    
*/

var Color = 'beigen';


/* 

    ARITHMETIC OPERATORS
    Perform basic math
*/

var area = 3 * 2;



/*
STRING OPERATORS
    Combine two strings
*/

var greeting ='Hi'  + 'Molly';

// The value of greeting is now Hi Molly.

/* COMPARISON OPERATORS
 Compare two values and return true or false */

var buy = 3 > 5;

// The value of buy is false.

/*
LOGICAL OPERATORS
Combine expressions and return true or false

*/

buy = (5 > 3) && (2 < 4);

// The value of buy is now true.


                            // ARITHMETIC OPERATORS

 /* JavaScript contains the following mathematical operators, which you can use with numbers. 
                    You may remember some from math class. */


/*  NAME              OPERATORS         PURPOSE & NOTES                             EXAMPLE           RESULT
    ADDITION             +                add one value                             10 + 5              15
    SUBTRACTION          -                Subtracts one value                       10 - 5              5
    DIVITION             /                Divide Two Values                         10 / 5              2
    MULTIPULCATION       *                multiples two values                      10 / 5              50
    INCREMENT            ++               add one to current number                 1++                 11
    DECREMENT            --               subtract one from current number          1--                 9
    MODULE               %                divide two value and return reminder      10 % 3              1

*/


/*
ORDER OF EXECUTION
    Several arithmetic operations can be performed in one expression, but it is
    important to understand how the result will be calculated. Multiplication
    and division are performed before addition or subtraction. This can affect
    the number that you expect to see. To illustrate this effect, look at the
    following examples.

*/

// Here the numbers are calculated left to right, so the total is 16:

var total = 2 +  4 + 10;


// But in the following example the total is 42 (not 60):
total = 2 + 4 * 10;

/* This is because multiplication and division happen before addition and subtraction.
    To change the order in which operations are performed, place the
    calculation you want done first inside parentheses. So for the following,
    the total is 60:
*/

total = (2 + 4 ) * 10;

// The parentheses indicate that the 2 is added to the 4, and then the resulting figure is multiplied by 10.