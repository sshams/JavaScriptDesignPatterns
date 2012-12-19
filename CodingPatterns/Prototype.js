/* 
 * @author Saad Shams sshams@live.com
 */

/**
 * Prototype example
 * @param {String} name
 * @param {String} color
 * @returns {Gadget}
 */

//suppose we've a function
function Gadget(name, color) {
    this.name = name;
    this.color = color;
    this.product = function() {
        return this.name + ": " + this.color;
    }
}

//To Extend
//1 - add properties to the prototype object
Gadget.prototype.price = 100;
Gadget.prototype.rating = 3;
Gadget.prototype.getInfo = function() {
    return 'Rating: ' + this.rating + ', price: ' + this.price;
}

//2 - assign a completely new object with properties
Gadget.prototype = {
    price: 100,
    rating: 3,
    getInfo: function() {
        return 'Rating: ' + this.rating + ', price: ' + this.price;
    }
}

//to use
var toy = new Gadget("camera", "black");
alert(toy.name);
console.log(to.getInfo());


/**
 * 
 * Own property has precedence over prototype property
 * @param {Object} name
 * @returns {Gadget}
 */
function Gadget(name) {
    this.name = name;
}
Gadget.prototype.name = 'car';

var toy = new Gadget('plane');
toy.name; //plane

delete toy.name //delete own property
toy.name; //car

toy.__proto__ //secret property available in firefox, referes to prototype object


/**
 * Extending built-in objects
 * @param {Object} needle
 * @returns {Boolean}
 */

Array.prototype.inArray = function(needle) {
    for(var i=0, length = this.length; i<length; i++) {
        if(this[i] === needle) {
            return true;
        }
    }
    return false;
}

var a = ["red", "green", "blue"];
a.inArray("red");


/**
 * Extending String object
 * Reverse functionality
 * uses Array's built-in reverse method
 */

if(!String.prototype.reverse) {
    String.prototype.reverse = function() {
        return Array.prototype.reverse.apply(this.split("")).join("");
    }
}

"str".reverse();

/**
 * Prototype has one problem, the object still refers to old prototype object even 
 * after it gets updated.
 * @returns {Dog}
 */

function Dog() {this.tail = true;}

var benji = new Dog();
var rusty = new Dog();

Dog.prototype.say = function() { return 'Woof'; }

Dog.prototype = {paws: 4, hair: true} //updated prototype with new objects
benji.paws //undefined
benji.tail //true

var d = new Dog(); //only new objects will have updated prototype properties
d.paws //4

//to fix, when you overwrite the prototype property, reset constructor property
Dog.prototype = {paws: 4, hair: true};
Dog.prototype.constructor = Dog;

/**
 * Shape extended by Triangle
 */

function Shape() {

}

function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.constructor.prototype = Shape;

Triangle.prototype.getPerimeter = function() {
    return this.a * this.b * this.c;
}

t = new Triangle(1, 2, 3);
t.constructor.prototype;

/**
 * Cleaner approach, no need to type prototype again and again
 * @param {String} name
 * @param {Function} func
 * @returns {Function.prototype}
 */

Function.prototype.method = function(name, func) {
    if(!this.prototype[name]) {
        this.prototype[name] = func;
        return this;    
    }
}

Number.method('integer', function() {
    return Math[this < 0 ? "ceil" : "floor"](this);
});

String.method('trim', function() {
    return this.replace(/^\s|\s+$/g, '');
});