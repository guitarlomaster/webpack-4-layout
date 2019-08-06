const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: [
        './src/scripts/index.ts',
        './src/style/style.scss'
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './assets/js/main.bundle.min.js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ["ts-loader"]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        //options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.(sass|scss)$/,
                include: path.resolve(__dirname, 'src/style'),
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new ExtractTextPlugin({
            filename: './assets/css/style.css',
            allChunks: true,
        }),
    ]
};
