# JS-Question-5-zero-trim

Write a function which trims multiple zero's sequences to a single zero digit.
the return value is the updated array.
YOU ARE NOT ALLOWED TO USE ANOTHER ARRAY, and you need to implement it with one pass over the array.
in other words, each element in the array should change its index only once during the program.

const arr = [1,2,0,0,0,0,5,7,-6,0,8,0]
var n = zeroTrim(arr);

console.log(n) // PRINT: 1,2,0,5,7,-6,0,8,0]
BEST IMPLEMENTATION SHOULD BE IN COMPLEXITY OF O(n) i.e , with one pass over the array.
