module.exports = function reverse(n) {
    if (n < 0) n = n * (-1);
    var num = n.toString().split('');
    var newNum = new Array(num.length);
    num.forEach((element) => {
        newNum.unshift(element);
    });
    n = Number(newNum.join(""));
    return n;

}