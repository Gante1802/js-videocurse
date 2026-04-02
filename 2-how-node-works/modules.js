// console.log(arguments)
// console.log(require('module').wrapper)

// Module.export
const C = require('./test-module1');
const clac1 = new C();
console.log(clac1.add(2, 5));

//exports
const calc2 = require('./test-module2');
console.log(calc2.multiply(2, 5));

//caching
require('./test-module3')();
require('./test-module3')();
require('./test-module3')();
