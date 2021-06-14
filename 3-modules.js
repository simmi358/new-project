//commonJS, every file is module (by default)
//modules - Encapsulated Code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-Second Module(Utils)');
const data = require('./6-Alternative flavour');
require('./7-mind grenade');

sayHi(`susan`)
sayHi(names.john)
sayHi(names.peter)
