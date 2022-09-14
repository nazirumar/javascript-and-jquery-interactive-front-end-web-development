/*
CREATING MORE OBJECT LITERALS
*/


var hotel ={
  name: 'Park',
  rooms:120,
  bocked: 77,
  checkAvailability: function() {
    return this.rooms - this.bocked;
    
  }
};


var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;


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