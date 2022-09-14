/*
CREATING MORE OBJECT CONSTRUCTOR
*/

/*
You can use this syntax to add properties and methods to any object
you have created (no matter which notation you used to create it).
To create an empty object using literal notation use:
var hotel = {}
The curly brackets create an empty object.

*/
var hotel ={
  name: 'Park',
  rooms:120,
  bocked: 77,
  checkAvailability: function() {
    return this.rooms - this.bocked;
    
  }
};

/*
UPDATING AN OBJECT
  To update the value of properties, use dot notation
  or square brackets. They work on objects created
  using literal or constructor notation. To delete a
  property, use the delete keyword.
  To update a property, use the same technique that was shown on the
  left-hand page to add properties to the object, but give it a new value.
  If the object does not have the property you are trying to update, it will
  be added to the object.

*/

hotel.name = 'Nazbeen'

/*
  You can also update the properties of an object (but not its methods)
  using square bracket syntax. The object name is followed by square
  brackets, and the property name is inside them.
  A new value for the property is added after the assignment operator.
  Again, if the property you are attempting to update does not exist, it
  will be added to the object.

*/
hotel['name'] = 'Nazbeens'


/*
To delete a property, use the delete keyword followed by the object
name and property name.
*/

delete hotel.name;

/*
If you just want to clear the value of a property, you could set it to a
blank string.
*/

hotel.name =''


/*

CREATING MANY OBJECTS: 
  CONSTRUCTOR NOTATION
      Sometimes you will want several objects to
      represent similar things. Object constructors can
      use a function as a template for creating objects.
      First, create the template with the object's
      properties and methods.
      A function called Hotel will be used as a template for creating new
      objects that represent hotels. Like all functions, it contains statements.
      In this case, they add properties or methods to the object.
      The function has three parameters. Each one sets the value of a
      property in the object. The methods will be the same for each object
      created using this function.
      The this keyword is used instead of the object name to indicate that
      the property or method belongs to the object that this function creates.
      Each statement that creates a new property or method for this object
      ends in a semicolon (not a comma, which is used in the literal syntax).
      The name of a constructor function usually begins with a capital letter
      (unlike other functions, which tend to begin with a lowercase
      character).
      The uppercase letter is supposed to help remind developers to use the
      new keyword when they create an object using that function (see next
      page).

      You create instances of the object using the
      constructor function. The new keyword followed
      by a call to the function creates a new object. The
      properties of each object are given as arguments to
      the function.

      Here, two objects are used to represent two hotels, so each object needs
      a different name. When the new keyword calls the constructor function
      (defined on the left-hand page), it creates a new object.
      Each time it is called, the arguments are different because they are the
      values for the properties of each hotel. Both objects automatically get
      the same method defined in the constructor function.



*/

function Hotel(name, rooms, booked) {
  this.name;
  this.rooms;
  this.bocked;
}

var nazirHotel = new Hotel('Nazir', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);
/*

      The first object is called quayHotel. Its name is ‘Quay’ and it has 40
      rooms, 25 of which are booked.
      
      Even when many objects are created using the same constructor
      function, the methods stay the same because they access, update, or
      perform a calculation on the data stored in the properties.
      The second object is called parkHotel. Its name is ‘Park’ and it has
      120 rooms, 77 of which are booked.

      You might use this technique if your script contains a very complex
      object that needs to be available but might not be used. The object is
      defined in the function, but it is only created if it is needed.


*/



/*
CREATING OBJECTS USING CONSTRUCTOR SYNTAX

*/


var newHotel = new Object();
newHotel.name = 'Nazbeen';
newHotel.rooms = 120;
newHotel.booked = 77;
newHotel.checkAvailability = function () {
  return this.rooms - this.booked;
  
};


var elName = document.getElementById('hotelName');
elName.textContent = newHotel.name;


var elRoom = document.getElementById('hotelRoom');
elRoom.textContent = newHotel.checkAvailability()


/*
 On the right, an empty object called hotel is created using the
  constructor function.
  Once it has been created, three properties and a method are then
  assigned to the object.
  (If the object already had any of these properties, this would overwrite
  the values in those properties.)
  To access a property of this object, you can use dot notation, just as
  you can with any object.
  For example, to get the hotel's name you could use:
  hotel.name
  Similarly, to use the method, you can use the object name followed by
  the method name:
  hotel.checkAvailability()

*/