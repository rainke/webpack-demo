const resolve = require('path').resolve;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const OpenBrowserPlugin = require('../plugin/openBrowser');
const theme = {
  "primary-color": "#1db65e"
};
const BASE_DIRNAME = process.cwd();
module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    filename: 'bundle.js',

    path: resolve(BASE_DIRNAME, 'dist'),

    publicPath: '/'
  },

  context: resolve(BASE_DIRNAME, 'src'),

  devtool: 'cheap-module-source-map',

  resolve: {
    extensions: [".js", ".jsx", ".css", ".json"]
  },

  devServer: {
    hot: true,

    historyApiFallback: {
      disableDotRule: true
    },

    contentBase: './dist',

    publicPath: '/',

    proxy: {
      '/github': {
        target: 'https://github.com/',
        secure: false,
        pathRewrite: { '^/github': '' }
      },
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: { "^/api": "" }
      }

    }
  },

  module: {
    rules: [
      {
        test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: "url-loader?limit=10000"
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules&sourceMap',
          'postcss-loader?sourceMap=inline',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?modules',
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          `less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`
        ]
      }
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.DefinePlugin({
      __DEV__: true
    }),

    new webpack.NamedModulesPlugin(),

    new OpenBrowserPlugin({ hehe: 'hehe' }),

    // new ExtractTextPlugin({ filename: 'app.css', disable: false, allChunks: true })
  ],
};