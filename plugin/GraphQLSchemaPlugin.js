const fetch = require('node-fetch');
const fs = require('fs');
const chalk = require('chalk');

function GraphQLSchemaPlugin(options) {
  let file = options.file;
  fetch(options.uri)
    .then(function(schemaResp) {
      return schemaResp.text()
    })
    .then(function(schemaText){
      console.log(`This is the ${options.file} inside schemaText`);
      fs.access(options.file, fs.constants.R_OK | fs.constants.W_OK, function(fileAccessError){
        if(fileAccessError) { throw new Error(`Cannot read or write to designated file path because: ${fileAccessError}`)}
        else {
          fs.writeFile(options.file, schemaText, function(writeFileError) {
            if(writeFileError) { throw new Error(`Cannot write to file because: ${writeFileError}`)}
            else {
              let successResponse = chalk.cyan(`Finished updating GraphQL Schema. File located at: ${options.file}`);
              console.log(successResponse)
              return true;
            }
          });
        }
      })
    })
    .catch(function(err) {
      let error = chalk.bgRed(err);
      console.error(`Downloading schema failed because: ${error}`);
    });
}

GraphQLSchemaPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    setTimeout(function() {
      console.log('Finished compiling and emitting');
      callback();
    }, 3000);
  });
}

module.exports = GraphQLSchemaPlugin;
