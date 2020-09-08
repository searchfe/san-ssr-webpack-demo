const SanLoaderPlugin = require('san-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
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
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new SanLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};