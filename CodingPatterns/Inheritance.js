/* 
 * @author Saad Shams sshams@live.com
 */

//1st Approach
function Shape() {
    this.name = 'shape';
    this.toString = function() {
        return this.name;
    };
}

function TwoDShape() {
    this.name = "TwoDShape";
}

function Triangle(side, height) {
    this.name = "Triangle";
    this.side = side;
    this.height = height;
    this.getArea = function() {
        return this.side * this.height/2;
    };
}

//Inheritance magic done here.
TwoDShape.prototype = new Shape();
Triangle.prototype = new TwoDShape();

//2nd Approach (Efficient), chained directly with prototypes
function Shape(){}
Shape.prototype.name = 'shape'
Shape.prototype.toString = function() {return this.name}

function TwoDShape() {}
TwoDShape.prototype = Shape.prototype; //direct chain
TwoDShape.prototype.constructor = TwoDShape;
//augment prototype
TwoDShape.prototype.name = '2D shape';

function Triangle(side, height) {
    this.side = side;
    this.height = height;
}

Triangle.prototype = TwoDShape.prototype; //direct chain
Triangle.prototype.constructor = Triangle;
Triangle.prototype.getArea = function() {return this.side * this.height/2}

var triangle = new Triangle(5, 10);
triangle.getArea();
triangle.toString(); //this call would be much faster, 2 lookups only through the prototype chain.

//Reusable function for Inheritance
function extend(child, parent) {
    var F = function() {}
    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructor = child;
    child.uber = parent.prototype;
}

extend(triange, shape);

//copying properties

function extend2(child, parent) {    
    var p = parent.prototype;
    var c = child.prototype;
    for(var i in p) {
        c[i] = p[i];
    }
    c.uber = p;
}