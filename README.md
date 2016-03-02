# output-directory

>A little helper for outputting directories within specified directory.

## Install

```
npm install output-directory --save
```

## Usage

```javascript
// test.js
var fs = require('fs');
var outputDirectory = require('output-directory');

var directories;

directories = outputDirectory('./example', []);

fs.writeFileSync('./output.json', JSON.stringify(directories, null, 2));

```

## APIS

### outputDirectory(directory, [outputDirectoriesArray]);

Returns outputDirectoriesArray for the specified directory.

#### directory

Type: String

Directory that should be specified.

#### outputDirectoriesArray (optional)

Type: Array
Default: []

Whole output directories within the specified directory.