var fs = require('fs');
var path = require('path');

module.exports = function outputDirectory(dir, output) {
  if (!dir) throw new Error('expected dir arguments here.');
  output = output || [];
  dir = path.resolve('.', dir);
  var dirs = fs.readdirSync(dir);
  
  dirs.forEach(function (item) {
    var fp = path.join(dir, item);
    // escape "node_modules" direcotry
    if (/node_modules/.test(fp)) return;
    if (fs.statSync(fp).isDirectory()) {
      // is directory
      var obj = {};
      Object.defineProperty(obj, item, {
        value: outputDirectory(fp, []),
        configurable: true,
        enumerable: true,
        writable: true
      });
      output.push(obj);
    } else {
      // is file
      output.push({
        filename: item,
        filePath: fp
      });
    }
  });
  return output;
};