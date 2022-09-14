/*
Like variables and named functions, properties and methods have a name
and a value. In an object, that name is called a key.
An object cannot have two keys with the same name. This is because keys
are used to access their corresponding values.
The value of a property can be a string, number, Boolean, array, or even
another object. The value of a method is always a function.

*/


var hotel ={
  name: 'Quay',
  rooms:40,
  bocked: 25,
  gym: true,
  roomType: ['twin', 'double', 'suite'],
  checkAvailability: function() {
    return this.rooms - this.bocked;
    
  }
};




/*
As you will see over the next few pages, this is just one of the ways you
can create an object.
Programmers use a lot of name/value pairs:
HTML uses attribute names and values.
CSS uses property names and values.
In JavaScript:
Variables have a name and you can assign them a value of a string,
number, or Boolean.
Arrays have a name and a group of values. (Each item in an array is a
name/value pair because it has an index number and a value.)
Named functions have a name and value that is a set of statements to
run if the function is called.
Objects consist of a set of name/value pairs (but the names are
referred to as keys).
CREATING

*/


/*
ACCESSING AN OBJECT AND DOT NOTATION


  You access the properties or methods of an object
  using dot notation. You can also access properties
  using square brackets.
  To access a property or method of an object you use the name of the
  object, followed by a period, then the name of the property or method
  you want to access. This is known as dot notation.
  The period is known as the member operator. The property or method
  on its right is a member of the object on its left. Here, two variables are
  created to hold the hotel name and number of vacant rooms.
*/
var hotelName = hotel.name;
var roomsFree = hotel.checkAvailability();
// console.log(hotelName, roomsFree);


/* You can also access the properties of an object (but not its methods)
using square bracket syntax.
This time the object name is followed by square brackets, and the
property name is inside them. */

var hotelrooms = hotel['rooms'];
// console.log(hotelrooms);


/*
CREATING OBJECTS USING LITERAL NOTATION

*/

var elName = document.getElementById('hotelName');
elName.textContent = hotelName;


var elRoom = document.getElementById('hotelRoom');
elRoom.textContent = hotel.checkAvailability()


/*
  This example starts by creating an object using literal notation.
  This object is called hotel which represents a hotel called Quay with
  40 rooms (25 of which have been booked).
  Next, the content of the page is updated with data from this object. It
  shows the name of the hotel by accessing the object's name property
  and the number of vacant rooms using the checkAvailability()
  method.
  To access a property of this object, the object name is followed by a
  dot (the period symbol) and the name of the property that you want.
  Similarly, to use the method, you can use the object name followed by
  the method name. hotel.checkAvailability()
  If the method needs parameters, you can supply them in the
  parentheses (just like you can pass arguments to a function).

*/