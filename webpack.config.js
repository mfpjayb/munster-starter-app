const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/dist'
  },
  devServer: {
    port: 4000,


    /**
     * route all request to index.html for spa
     */
    historyApiFallback: {
      index: '/src/index.html'
    },


  },
  module: {
    rules: [

      /**
       * CSS loaders
       */
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      //   exclude: [
      //     path.resolve(__dirname, 'src/assets'),
      //     path.resolve(__dirname, 'node_modules'),
      //   ]
      // },


      /**
       * Babel loader config
       */
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }]
            ]
          }
        },
        exclude: [
          path.resolve(__dirname, 'src/assets'),
          path.resolve(__dirname, 'node_modules'),
        ]
      },
      {
        test: /.html$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        },
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'src/assets'),
          path.resolve(__dirname, 'node_modules')
        ]
      },


      /**
       * Munster loader
       */
      {
        test: /(\.html$|\.css$)/,
        use: 'munster-loader',
        include: [
          path.resolve(__dirname, 'src/app')
        ],
        exclude: [
          path.resolve(__dirname, 'src/assets'),
          path.resolve(__dirname, 'node_modules')
        ]
      },


      /**
       * to allow importing images and set it to img tag source
       */
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader',
        include: [path.resolve(__dirname, 'src/assets')],
      },


    ]
  },


  /**
   * prevent source map warnings in browser
   */
  devtool: 'eval-source-map'


};
