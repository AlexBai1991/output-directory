var fs = require('fs');

var outputDirectory = require('..');
var ret = outputDirectory('./example', []);

fs.writeFileSync('./output.json', JSON.stringify(ret, null, 2));