const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {UnusedFilesWebpackPlugin} = require('unused-files-webpack-plugin');
const { DuplicatesPlugin } = require('inspectpack/plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        'app': './src/scripts/app.js',
        'promo': './src/scripts/promo.js'
        //'app_site': './src/scripts/app_site.js'
    },
    output: {
        path: path.resolve(__dirname, '../site/assets'),
        filename: './scripts/[name].bundle.js',
        publicPath: ''
    },
    module: {
        rules: [
            // {
            //     test: /\.html$/i,
            //     loader: 'html-loader',
            //     options: {
            //         sources: false,
            //     },
            // },
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
                        options: {sourceMap: true}
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {path: './postcss.config.js'}
                        }
                    },
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {sourceMap: true}
                    },
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?dummy=[hash]',
                    publicPath: '../img',
                    outputPath: 'img'
                },
            },
            {
                test: /\.(woff|woff2)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?dummy=[hash]',
                    publicPath: '../fonts',
                    outputPath: 'fonts'
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../layouts/test.htm',
            template: './src/markup/layouts/default.htm',
            inject: false,
            files: {
                headJs: [
                    'assets/scripts/common.libs.js',
                    'assets/scripts/default.libs.js',
                    '@framework',
                    '@framework.extras',
                    'assets/scripts/runtime.bundle.js',
                    'assets/scripts/vendor-chunk.bundle.js',
                    'assets/scripts/common-chunk.bundle.js',
                    'assets/scripts/app.bundle.css'
                ],
                bodyJs: null,
                styles: [
                    'assets/css/xpBilling.css',
                    'assets/css/app.bundle.css',
                    '@framework.extras'
                ]
            }
        }),
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
