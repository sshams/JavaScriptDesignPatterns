/* 
 * @author Saad Shams
 */

/**
 * 
 * @param {Number} disc
 * @param {String} src
 * @param {String} aux
 * @param {String} dst
 * @returns {undefined}
 */
var hanoi = function hanoi(disc, src, aux, dst) {
    if (disc > 0) {
        hanoi(disc - 1, src, dst, aux);
        document.writeln('Move disc ' + disc + ' from ' + src + ' to ' + dst);
        hanoi(disc - 1, aux, src, dst);
    }
};
hanoi(3, 'Src', 'Aux', 'Dst');

//walk the dom
function walk(node, func) {
    func(node);
    node = node.firstChild;
    while(node) {
        walk(node, func);
        node = node.nextSibling;
    }
}

var getElementsByAttribute = function (att, value) {
var results = [];
    walk_the_DOM(document.body, function (node) {
        var actual = node.nodeType === 1 && node.getAttribute(att);
        if (typeof actual === 'string' && (actual === value || typeof value !== 'string')) {
            results.push(node);
        }
    });
    return results;
};