const SanLoaderPlugin = require('san-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// TODO
// 和 webpack.client.config.js 中相同部分抽取到 webpack.base.config.js
module.exports = {
    entry: './src/entry-server.js',
    devtool: 'cheap-source-map',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server_bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.san$/,
                loader: 'san-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.less$/,
                use: ['node-style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new SanLoaderPlugin()
    ]
};