/* 
 * @author Saad Shams sshams@live.com
 */


/**
 * Book object
 * 1 - Create Object using Object Literal Notation {}
 * uses composition to strore author information
 * @type type book
 */

var book = {
    name: 'The Light',
    published: 1961,
    author: {
        firstname: 'Jose',
        lastname: 'Sha'
    },
    toString: function() {
        return this.name + " " + this.published;
    }
}

console.log(book.author.firstname); //Jose
console.log(book.author.lastname); //Sha
console.log(book['author']['firstname']); //Jose
console.log(book.author['lastname']); //Sha
console.log(book); //The Light 1961

/**
 * 2 - Create object using constructor functions
 */

function Doctor() {
    this.occupation = 'Doctor';
}
var doctor = new Doctor();
console.log(doctor.occupation);

/**
 * Parameterized Constructors
 * 
 */

function Person(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.introduce = function() {
        return this.name + " " + this.occupation;
    }
}

var a = new Person("John", "doctor");
var b = new Person("Doe", "engineer");
console.log(a.introduce());
console.log(b.introduce());

/**
 * Create objects using constructor property
 */

function Hero(name) {
    this.name = name;
}

var h1 = new Hero("saad");
var h2 = new h.constructor("shams"); //refers to the Hero(name)
console.log(h1.name);
console.log(h2.name);

/**
 * Factory functions to return objects
 */

function factory(occupation) {
    return {
      occupation: occupation
    };
}
var o = factory("Doctor")
console.log(o.occupation);

//Utility Objects Math, Date, RegExp
