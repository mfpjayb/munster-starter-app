const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/dist'
  },
  devServer: {
    port: 4000,


    /**
     * route all request to index.html for spa
     */
    historyApiFallback: {
        index: '/index.html'
    },


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
      },

        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader',
            ],
            include: [
                path.resolve(__dirname, 'src/assets')
            ],
        },
    ]
  },


  /**
   * prevent source map warnings in browser
   */
  devtool: isProd ? false : 'eval-source-map'
};
