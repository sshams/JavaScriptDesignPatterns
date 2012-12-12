/* 
 * @author Saad Shams sshams@live.com
 */

//closure using global variables
var getValue, setValue;

//Encapsulation, can't access inner variable from outside.
(function() {
    var value = 4;
    getValue = function() {
        return value;
    };
    setValue = function(v) {
        value = v;
    }
})();

setValue(4);
alert(getValue(4));
