/*

WORKING WITH DECIMAL NUMBERS
        As with the String object, the properties and methods of the Number
        object can be used with with any value that is a number.
        1. In this example, a number is stored in a variable called
        originalNumber, and it is then rounded up or down using two
        different techniques.
        In both cases, you need to indicate how many digits you want to round
        to. This is provided as a parameter in the parentheses for that method.


*/










var originalNumber = 10.23456;

var msg = '<h2> original number </h2><p>' + originalNumber + '</p>';
msg += '<h2> toFixed</h2><p>' + originalNumber.toFixed(3) + '</p>';
msg += '<h2> toPrecision</h2><p>' + originalNumber.toPrecision(3) + '</p>';

var el = document.getElementById('info');
el.innerHTML =msg
