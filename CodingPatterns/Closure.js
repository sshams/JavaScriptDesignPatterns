/* 
 * @author Saad Shams sshams@live.com
 */

//*cross browser
var xhr;
if(typeof window.XMLHttpRequest === "function") {
	xhr = new XMLHTTPRequest();
} else {
    for(var i=0; i<ids.length; i++) {
    	try {
            xhr = new ActiveXObject(ids[i]);
	} catch(e) {}
    }
}

//closure to handle multiple requests for each 
function request(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = (function(xhr) {
    	return function() {
            callback(xhr)
        };
    })(xhr);
    xhr.open('GET', url);
    xhr.send(null)
}

request('http://google.ae?q=saad', function(xhr) {
    alert(xhr.responseText);
    if(xhr.readyState == 4 && xhr.status == 200) {
        alert(xhr.responseText);           
    }
});

request('contents.html', function(obj) {
	//do something
});
request('contents.xml', function(obj) {
	//do something
});


/**
 * Closure to protect variables from unauthorized access
 * @type myObject.Anonym
 */
var myObject = (function ( ) {
    var value = 0;
    return {
        increment: function (inc) {
        value += typeof inc === 'number' ? inc : 1;
    },
    getValue: function ( ) {
        return value;
    }
};
}());