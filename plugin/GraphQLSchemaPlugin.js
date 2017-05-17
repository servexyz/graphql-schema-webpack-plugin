function GraphQLSchemaPlugin(options) {
  console.log('GraphQL Schema plugin running');
}

GraphQLSchemaPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    setTimeout(function() {

    },
    callback();
  });
};

module.exports = GraphQLSchemaPlugin;
