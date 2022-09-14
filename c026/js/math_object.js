/*

WORKING MATH OBJECT
       This example is designed to generate a random whole number between
                1 and 10.
                The Math object's random() method generates a random number
                between 0 and 1 (with many decimal places).
                To get a random whole number between 1 and 10, you need to
                multiply the randomly generated number by 10.
                This number will still have many decimal places, so you can round it
                down to the nearest integer.
                The floor() method is used to specifically round a number down
                (rather than up or down).
                This will give you a value between 0 and 9. You then add 1 to make it
                a number between 1 and 10.


*/









var randomNumber = Math.floor((Math.random() * 10) + 1);

var el = document.getElementById('info');
el.innerHTML ='<h2> random number </h2><p>' + randomNumber + '</p>'

