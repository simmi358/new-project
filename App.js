//npm = gloabal command, comes with node 
//npm -- version

//local dependency - use it only in this particular project
//npm i <packageName>


//global dependency - use it in any project
//npm inctall -g <packageNmae>
// sudo npm install -g <packageName> (mac)

//package.json - manifest file (stories important info about project/package)'
//manual approach (create package.json in the root, create propertes etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _ = require('lodash');


const items = [1, [2, [3, 4]]]
const newItems = _.flattenDeep(items);
console.log(newItems);