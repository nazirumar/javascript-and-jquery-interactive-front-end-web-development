/*
CREATE & ACCESS OBJECTS CONSTRUCTOR NOTATION
*/

function Hotel(name, rooms, booked) {
this.name = name;
this.rooms = rooms;
this.booked = booked;
this.checkAvailability = function () {
  return this.rooms - this.booked;
  
}
};

var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);

var details1 = quayHotel.name + ' rooms: ';
details1 += quayHotel.checkAvailability()
var elHotel = document.getElementById('hotel1');
elHotel.textContent = details1

var details2 = parkHotel.name + ' rooms: ';
details2 += parkHotel.checkAvailability()
var elHote2 = document.getElementById('hotel2');
elHote2.textContent = details2

/*
To get a better idea of why you might want to create multiple objects
on the same page, here is an example that shows room availability in
two hotels.
First, a constructor function defines a template for the hotels. Next, two
different instances of this type of hotel object are created. The first
represents a hotel called Quay and the second a hotel called Park.
Having created instances of these objects, you can then access their
properties and methods using the same dot notation that you use with
all other objects.
In this example, data from both objects is accessed and written into the
page. (The HTML for this example changes to accommodate the extra
hotel.)
For each hotel, a variable is created to hold the hotel name, followed
by space, and the word rooms.
The line after it adds to that variable with the number of available
rooms in that hotel.
(The += operator is used to add content to an existing variable.)

*/
