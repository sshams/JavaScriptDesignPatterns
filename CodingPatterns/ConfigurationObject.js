/* 
 * @author Saad Shams sshams@live.com
 */

var app = {};
app.dom = {};
app.dom.Button = function(text, config) {
    var type = config.type || 'submit';
    var font = config.font || 'Verdana';
    var color = config.color || '#000';
}

new app.dom.Button("submit", {type:'button', font:'Arial', color:'#F00'});