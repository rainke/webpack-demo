var webpack = require('webpack');

module.exports = function(env) {
    return {
        entry:{
          main: './test/index.js',
          vendor:'moment'
        },
        output: {
            filename: '[name]-[chunkhash].js',//'[chunkhash].[name].js',
            path: './build'
        },
        plugins:[
          new webpack.optimize.CommonsChunkPlugin({
            //manifest :防止vendor重新打包
            names:['vendor', 'manifest']
          })
        ]
    }
}
