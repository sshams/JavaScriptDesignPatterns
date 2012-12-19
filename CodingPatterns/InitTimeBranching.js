/* 
 * @author Saad Shams
 */

//branching for the correct method upon initialization
//It's faster compared to run time checks while adding listeners
//sniffing will be done one time only

var app = {};
app.addListener = null;
app.removeListener = null;

if(typeof(window.addEventListener) === "function") {
    app.addListener = function(element, type, func) {
        element.addEventListener(type, func, false);
    };
    app.removeListener = function(element, type, func) {
        element.removeEventListener(type, func, false);
    }
} else if(typeof(document.attachEvent) === "function") { //IE
    app.addListener = function(element, type, func) {
        element.attachEvent('on' + type, func);
    };
    app.removeListener = function(element, type, func) {
        element.detachEvent('on' + type, func);
    }
} else { //older browsers
    app.addListener = function(element, type, func) {
        element['on' + type] = func;
    };
    app.removeListener = function(element, type, func) {
        element['on' + type] = null;
    }
}
