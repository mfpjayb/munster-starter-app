const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/dist'
  },
  devServer: {
    port: 4000
  },
  module: {
    rules: [
      {
        test: /\.html/,
        use: 'munster-loader',
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'src/assets')
        ]
      }
    ]
  },


  /**
   * prevent source map warnings in browser
   */
  devtool: 'eval-source-map'
};