/* 
 * @author Saad Shams sshams2live.com
 */


//JavaScript Object Notation

{
    'ferrari': '4',
    'lamborghini': '2',
    'bmw': '5'
}

//xml equivalent is lengthy
/*
<?xml version="1.0">
<cars>
    <ferrari>4</ferrari>
    <lamborghini>2</lamborghini>
    <bmw>5</bmw>
</cars>
*/
//Exchange of data from between client and server is preferred via JSON
//typically on server side, libraries are available, for instance in php
//json_encode(), json_decode()

//in Javascript, 
var cars = JSON.parse(xhr.response); //visit www.json.org for more