/* 
 * @author Saad Shams sshams@live.com
 */

//to avoid global variables, use namespaces,
//idea is to use one global object and store all your variables and functions
//as properties of global object

var app = saad || {};

saad.event = {};

saad.event = {
    addListener: function(element, type, func) {
        
    },
    removeListener: function(element, type, func) {
    
    },
    getEvent: function(event) {
        
    }
}

//Namespaced constructors
var saad = saad || {};
saad.dom = {};
saad.dom.createElement = function(type, prop) {
    var temp = document.createElement(type);
    for(var i in prop) {
        temp.setAttribute(i, prop[i]);
    }
    return temp;
}

saad.dom.createTextNode = function(text) {
    return document.createTextNode(text);
}

var element1 = app.dom.createElement('a', {href: 'http://muizz.com'});
var element2 = app.dom.createTextNode('click me');
element1.appendChild(element2);
document.body.appendChild(element1);

//namespace method like goog.provide() from Clsoure, puremvc.define() from PureMVC
var saad = saad || {};
saad.package = function(name) {
    var parts = name.split(".");
    var current = saad;
    
    for(var i in parts) {
        if(!current[parts[i]]) {
            current[parts[i]] = {};
        }
	current = current[parts[i]];
    }
}

saad.package("com.muizz");
alert(saad);
alert(saad.com);
alert(saad.com.muizz);