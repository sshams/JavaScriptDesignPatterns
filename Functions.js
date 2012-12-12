/* 
 * @author Saad Shams
 * Different types of Functions
 * Closure
 * Apply Functions, Self Invoking, 
 * Private Functions, Anonymous Functions
 * Callback Functions, Inner Private Functions
 * Calling returned Functions
 * Self Rewriter Functions
 */

/**
 * Callback Functions
 * Call at the end of routine
 */

function output(vars, callback) {
    for(prop in vars) {
        console.log(prop + ": " + vars[prop]);
    }
    callback();
}
function done() {
    console.log("done");
}
output(["a", "b", "c"], done);

/**
 * Anonymous Callback
 */

output(["x", "y", "z"], function() {
    console.log("ananymous callback")
});

/**
 * Apply Function
 * Used in Easing functions for Tween
 * @param (Array) vars
 * @param (Function) applyFunction
 * @returns {Number}
 * 
 */

function addAndApply(vars, applyFunction) {
    var sum = 0;
    for(var i=0; i<vars.length; i++) {
        sum += applyFunction(vars[i])
    }
    return sum;
}
function square(x) {
    return x*x;
}
addAndApply([1, 2, 3], square); //returns 14;

/**
 * Anonymous
 * Doesn't do anything
 */

(function() {
    consoloe.log("anonymous");
});

/**
 * Self Invoking Functions
 */

(function(){
    alert("Self Invoking Function")
})();


/**
 * Inner Private Functions
 * 
 */

function a(param) {
    function b(input) { //inner private function
        return input * 2;
    }
    return b(4);
}
a();

/**
 * Calling Returned Functions
 */

function a() {
    alert("A");
    return function() {
        alert("B");
    }
}
a()(); //Double Calls

/**
 *  Self Rewriter Function
 *  Used for initialization tasks and later to be called for
 *  normal functionality.
 */

function a() {
    function init() {
        console.log("init success");
    }

    function work() {
        console.log("finished task")
    }
    init();
    return work;
}
a = a(); //init success & finished task
a(); //finished task


/**
 * Scope Chain
 */

var a = 1;
function f() {
    var b = 1;
    function n() { //n has access to a, b, c, local scope up to global scope
        var c = 3;
    }
}

/**
 * Closure, break the chain
 */

//Closure 1
function f() {
    var x = "x"; //x not accessible in global chain
    return function() { //but function will return and expose the chain
        return x; //x will become accessible
    }
}
n = f();
n();

//Closure 2, using global 
var n;
function f() {
    var x = "x";
    n = function() { //Closure, assignment to global var, the inner context gets exposed
        return x;
    }
}
n(); //

//Closure 3, closure keeps holding to context it was defined including variables and their latest values
function f(x) {
    var n = function() { //
        return x;
    }
    x++; //increments and closure will refer to the updated value
    return n;
}
var m = f(200);
m(); //201

//closure in loops
function f() {
    var a = [];
    for(var i=0; i<3; i++) {
        a[i] = (function(x) {
                    return function() {
                        return x;
                    }
               })(i);
    }
    return a;
}
var a = f();
a[0](); //0
a[1](); //1
a[2](); //2