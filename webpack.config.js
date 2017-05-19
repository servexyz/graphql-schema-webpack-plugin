require('dotenv').config()
const GraphQLSchemaPlugin = require('./plugin/GraphQLSchemaPlugin');
const path = require('path');

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
      uri: process.env.GRAPHQL_ENDPOINT,
      name: process.env.GRAPHQL_SCHEMA_FILE_NAME,
      path: process.env.GRAPHQL_SCHEMA_FILE_PATH,
    }),
  ],
}
