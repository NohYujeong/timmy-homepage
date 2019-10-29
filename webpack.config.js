const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const babelConfig = require('./babel.config');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/dst',
    filename: '[name].[chunkhash:8].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: babelConfig.presets,
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html', inject: 'body' }), new BundleAnalyzerPlugin()],
  devServer: {
    contentBase: path.join(__dirname, 'dst'),
    compress: true,
    host: '0.0.0.0',
    allowedHosts: ['localhost', 'lvh.me'],
  },
};
