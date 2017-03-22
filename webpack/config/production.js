const resolve = require('path').resolve;
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const theme = {
  "primary-color": "#1db65e"
};
const BASE_DIRNAME = process.cwd();
const extractCSS = new ExtractTextPlugin('css/app-[contenthash:8].css');
const extractLESS = new ExtractTextPlugin('css/vender-[contenthash:8].css');
module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    filename: 'js/bundle-[chunkhash:8].js',

    path: resolve(BASE_DIRNAME, 'build'),

    publicPath: '/'
  },

  context: resolve(BASE_DIRNAME, 'src'),

  devtool: 'cheap-module-source-map',

  resolve: {
    extensions: [".js", ".jsx", ".css", ".json"]
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
        use: extractCSS.extract({
            fallback: 'style-loader',
            use: ['css-loader?modules&sourceMap', 'postcss-loader']
        })
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
        use: extractLESS.extract([
          'css-loader',
          'postcss-loader',
          `less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`
        ])
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: '../webpack/template/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new webpack.DefinePlugin({
      __DEV__: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
      sourceMap: true,
    }),
    extractCSS,
    extractLESS,
    new ManifestPlugin()
  ],
};