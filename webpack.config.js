const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './lesson-2/src/main.js',
    output: {
        path: resolve(__dirname, 'lesson2/build'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\\.(png|jpe?g|gif)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }]
            },
            {
                test: /\.mp3$/,
                loader: 'file-loader',
                options: {
                    name: 'media/[name].[ext]'
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: resolve(__dirname, 'lesson-2/index.html') }),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        port: 3000
    }
};