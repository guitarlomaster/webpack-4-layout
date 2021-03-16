const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {UnusedFilesWebpackPlugin} = require('unused-files-webpack-plugin');
const { DuplicatesPlugin } = require('inspectpack/plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        'app': './src/scripts/app.js'
        //'app_site': './src/scripts/app_site.js'
    },
    output: {
        path: path.resolve(__dirname, '../site/assets'),
        filename: './scripts/[name].bundle.js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            // url: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {path: './postcss.config.js'}
                        }
                    },
                    {
                        loader: 'resolve-url-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?dummy=[hash]',
                    publicPath: '../img',
                    outputPath: 'img'
                },
            },
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     filename: 'test.html',
        //     template: './src/index.html'
        // }),
        new MiniCssExtractPlugin({
            filename: './css/[name].bundle.css'
        }),
        new UnusedFilesWebpackPlugin({
            globOptions: {
                ignore: [
                    '*.*',
                    'node_modules/**/*',
                    'bower_components/**/*'
                ]
            }
        }),
        new DuplicatesPlugin(),
        new CircularDependencyPlugin(),
    ]
};
