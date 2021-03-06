var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    PredictChart: './src/PredictChart.js',
    ChartWithVolume: './src/ChartWithVolume.js',
    PredictChartMobile: './src/Predict.js',
    SampleChart: './src/Sample.js',
    StockChart: './src/StockChart.js',
    TimeTrendChart: './src/mobile/TimeTrendChart.js',
    CandleStickChart: './src/mobile/CandleStickChart',
    d3: ['d3']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    library: '[name]'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['d3'],
      minChunks: 3
    }),
    new webpack.optimize.UglifyJsPlugin({

      // Eliminate comments
      comments: false,

      // Compression specific options
      compress: {
        // remove warnings
        warnings: false,

        // Drop console statements
        drop_console: true
      }
    })
  ]
};