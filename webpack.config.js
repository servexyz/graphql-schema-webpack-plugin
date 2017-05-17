const GraphQLSchemaPlugin = require('./plugin/GraphQLSchemaPlugin');
const path = require('path');
const GQL_ENDPOINT=process.env.

module.exports = {
  entry: {
    app: './index.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  plugins: [
    new GraphQLSchemaPlugin({
      uri: process.env.GQL_ENDPOINT
    }),
  ],
}
