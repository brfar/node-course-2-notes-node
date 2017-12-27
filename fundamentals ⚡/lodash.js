/**
 * depois de rodar 'npm i lodash --save'
 * eu tenho acesso a essa biblioteca
 */
const _ = require('lodash');
/**
 * the order of operation IS important!
 * node first is gonna try to find a core module named 'lodash'
 * it ain't gonna find one (cause it doesn't exist)
 * and THEN it's gonna look in the node_modules folder!
 */

// we can now use lodash's methods in our app!
console.log(_.isString(true)); // ↪ false
console.log(_.isString('yea')); // ↪ true

 