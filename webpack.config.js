module.exports = {
    resolve: {
      extensions: ['', 'webpack.js', '.web.js', '.js', '.ts', '.tsx']
    },
    context: __dirname,
    entry: {
      app: ['./index.jsx']
    },
    output: {
      path: './build',
      filename: 'app.js',
      publicPath: '/build/
    },
    module: {
      loaders: [
        {
          test: /(\.js|.jsx)$/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'stage-2', 'react']
          }
        }
      ]
    }
  }