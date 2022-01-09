module.exports = function reverse(n) {
    if (n < 0) {
        n = -n;
    }
   return  Number(n.toString().split('').reverse().join(''));  
}
