const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
    mode: 'development',
    watch: true,
    watchOptions: {
        ignored: ['files/**/*.js', 'node_modules'],
        aggregateTimeout: 600,
        poll: 50
    },
    entry: __dirname + '/src/index.js',
    output: {
      path: __dirname + '/dist/',
      filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/react']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        'react-dom': '@hot-loader/react-dom'
      }
    },
    optimization: {
        minimizer: [new TerserPlugin()]
    },
    devtool: 'inline-source-map',
    plugins: [
        new CopyWebpackPlugin([
            {from: 'src/assets', to: 'assets'}
        ])
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};