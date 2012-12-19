/* 
 * @author Saad Shams sshams@live.com
 */

/**Iterator Pattern 
 * @param (Object)x
 * @return (Function) Closure
 * **/

function setup(x) {
    var i = 0;
    return function() {
        return x[i++];
    }
}

var next = setup(['X', 'Y', 'Z']);
console.log(next());
console.log(next());
console.log(next());