var counter = function(arr){
    return 'there are ' + arr.length + " elements in this array"
}
var adder = function(a,b){
    return `The sum of ${a} and ${b} is ${a + b}`
}
var pi = 3.142;
module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
}