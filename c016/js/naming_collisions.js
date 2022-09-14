/*
NAMING COLLISIONS
You might think you would avoid naming collisions; after all you know
which variables you are using. But many sites use scripts written by
several people. If an HTML page uses two JavaScript files, and both have
a global variable with the same name, it can cause errors. Imagine a page
using these two scripts:

 but this is old procedure: <><><><><>

*/

// show size of the building plot
function showPlotSize() {
  var width = 3;
  var height = 2;
  return 'Area' + (width * height);
  
}

var msg = showPlotSize()
console.log(msg);


// show size of the garden
function showGardenSize() {
  var width = 12;
  var height = 25;
  return width * height;
  
}

var msg = showGardenSize()
console.log(msg);