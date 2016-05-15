//must be ES5
module.exports = {
  entry:  ['./client/client.js'],
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  //define tasks to perform while bundling
  module: {
    loaders: [
      {
        //if file has .js at the end of the filename ($), then use babel-loader, excluding node_modules
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        //using query is equivalent to making .babelrc file
        //tells babel to use babel-loader with presets react and es2015
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
