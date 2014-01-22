function Person(firstname, lastname, age, eyecolor) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.eyecolor = eyecolor;
}
Person.prototype.name = function() {
    return this.firstname + " " + this.lastname;
}

Then make the .prototype object of Student an instance of Person:

function Student(firstname, lastname, age, eyecolor, level) {
    this.level = level;
    Person.call(this, firstname, lastname, age, eyecolor);
}

// Make the prototype object of the Student constructor inherit from the
//    prototype object of the Person constructor.
Student.prototype = Object.create(Person.prototype)

And so now your name method is shared among all instances created instead of being remade for each instance.

var per = new Person("Abe", "Lincoln", 45, "green");

var obj = new Student("Abe", "Lincoln", 45, "green", "senior");
