
function getarea(width, height) {
  
  var area = width * height;
  return area;

}

var wallsize = getarea(3, 2);

document.write(wallsize)

/*
CREATING THE VARIABLES IN CODE
  Each variable that you declare takes up memory. The more variables a
  browser has to remember, the more memory your script requires to run.
  Scripts that require a lot of memory can perform slower, which in turn
  makes your web page take longer to respond to the user.


*/

var width = 15;
var height = 30;
var isWall = true;
var canPaint = true;

// A variable actually references a value that is stored in memory. The  same value can be used with more than one variable:
