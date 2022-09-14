
/* This script displays a greeting to the user based upon
the current time.
It is an example from JavaScript & jQuery book */


var today = new Date()
var hourNow = today.getHours()
var greeting;


if (hourNow > 18){
    greeting = 'Good Evening';
}else if( hourNow > 12 ){
    greeting = 'Good Afternoon';
}else{
    greeting = 'Welcome';
}

document.write('<h3>' + greeting + '</3>')

