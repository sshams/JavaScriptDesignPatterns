/* 
 * @author Saad Shams sshams@live.com
 */

//Coined by Douglas Crockford
//public methods giving access to private methods
//but at the same time protecting inner implementations
//any override to these functions will keep the inner functionality going on
//for instance app.dom.setStyle = function() {alert('new'}

var app = {};
app.dom = (function(){
    var _private = function() {
        //private code
    }
    var _setStyle = function(element, prop, value) {
        console.log('set style');
        _private();
    };
    var _getStyle = function(element, prop, value) {
        console.log('get style');
        _private();
    };
    return {
        setStyle: _setStyle,
        getStyle: _getStyle,
        yetAnother: _setStyle
    };
})();

app.dom.setStyle();

