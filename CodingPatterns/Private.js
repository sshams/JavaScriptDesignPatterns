/* 
 * @author Saad Shams sshams@live.com
 */

var app = {};
app.dom = {};
app.dom.Button = function(type, styles) {
    //it behaves as private since the lifetime is limited to function call only.
    var styles = { 
        font: 'Verdana',
        border: 'solid red 1px'
    };
    //inner function as private
    function setStyles() {
        for(var i in styles) {
            button.style[i] = configi[i] || styles[i];
        }
    };
    config = config || {};
    var b = doucmnet.createElement('input');
    setStyles();
    return b;
};

var button = new app.dom.Button();
alert(button);
//alert(button.styles) not available
alert(button.setStyles);