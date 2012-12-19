/* 
 * @author Saad Shams
 */

//It's similar to InitTimeBranching with a difference
//that the definition will occur only once the function is called
//unlike the InitTimeBranching that will happen always.
//basically the function redefines itself on the first call after detecting API
//following calls will be directly to the relevant function
//result faster execution

var app = {};
app.addListener = function(element, type, fn) {
    if(typeof(element.addEventListener) === "function") {
        app.addListener = function(element, type, fn) {
            element.addEventListener(type, fn, false);
        }
    } else if(typeof(element.attachEvent) === "function") {
        app.addListener = function(element, type, fn) {
            element.attachEvent('on' + type, fn);    
        }
    } else {
        app.addListener = function(element, type, fn) {
            element['on' + type, fn];
        }
    }
}

