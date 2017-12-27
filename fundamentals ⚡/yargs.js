const yargs = require('yargs');

/**
 * 'yargs.argv' is where the 'yargs' library 
 * stores its version of the arguments that your app runs with
**/
const argv = yargs.argv;

console.log('✍  process: ', process.argv); // original node version
console.log('✍  yargs: ', argv); // yargs better version

/** On the terminal:
 * > node yargs.js add
 * 
 * ✍  process:  [ 'C:\\Program Files\\nodejs\\node.exe',
 * 'C:\\Users\\brobs\\Desktop\\node\\notes-node\\fundamentals ⚡\\yargs.js', 'add' ]
 * ✍  yargs:  { _: [ 'add' ], '$0': 'fundamentals ⚡\\yargs.js' }
 * 
 * ___The biggest differce between the two is when we pass key value pairs. eg:
 * 
 * > node yargs.js add --tittle=secret
 * 
 * ✍  process:  [ 'C:\\Program Files\\nodejs\\node.exe',
 * 'C:\\Users\\brobs\\Desktop\\node\\notes-node\\fundamentals ⚡\\yargs.js',
 * 'add',
 * '--title=secret' ]
 * ✍  yargs:  { _: [ 'add' ],
 * title: 'secret',
 * '$0': 'fundamentals ⚡\\yargs.js' }
 * 
 * Process gives us a string that would be a pain to parse in order to fetch the value and the key 
 * Yargs on the other hand gives us a 'title' property with the value of 'secret'. much easier.
**/

console.log(`✌  ${argv.title}`);
console.log(`✌  ${argv.body}`);

/** > node yargs.js add --title=secret --body="this is a secret"
 * ✌  secret
 * ✌  this is a secret
 */