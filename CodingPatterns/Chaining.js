/* 
 * @author Saad Shams sshams@live.com
 */

//constructors return this
//return this on each invocation to chain methods.
//jQuery makes good use of chaining methods

function Button(text) {
    this.text = text;
   
    this.setStyle = function() {
        //implementation
	console.log('setting style');
        return this;
    }
    this.setText = function() {
        //implementation
	console.log('setting text');
        return this;
    }
	 return this;
}

new Button("hello").setStyle().setText();