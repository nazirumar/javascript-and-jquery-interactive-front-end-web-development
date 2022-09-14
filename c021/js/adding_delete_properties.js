/*
CREATE & ACCESS OBJECTS CONSTRUCTOR NOTATION



Once you have created an object (using literal or constructor notation),
you can add new properties to it.
You do this using the dot notation that you saw for adding properties to
objects on p103.
In this example, you can see that an instance of the hotel object is
created using an object literal.
Immediately after this, the hotel object is given two extra properties
that show the facilities (whether or not it has a gym and/or a pool).
These properties are given values that are Booleans (true or false).
Having added these properties to the object, you can access them just
like any of the objects other properties. Here, they update the value of
the class attribute on their respective elements to show either a check
mark or a cross mark.
To delete a property, you use the keyword delete, and then use dot
notation to identify the property or method you want to remove from
the object.
In this case, the booked property is removed from the object.
If an object is created using a constructor function, this syntax only
adds or removes the properties from the one instance of the object (not
all objects created with that function).
*/

var Hotel = {
name : 'Park',
booked : 77,
rooms :120
};

Hotel.gym = true;
Hotel.pool = false;
delete Hotel.booked

var elPool = document.getElementById('pool');
elPool.textContent ='Pool:' + Hotel.pool;

var elgym = document.getElementById('gym');
elgym.textContent ='Gym:' +  Hotel.gym;

