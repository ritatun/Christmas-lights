const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    watch: true,
    entry: "./src/index.js",
    output: { path: path.resolve(__dirname, "build"), filename: "main.js" },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "index.html")
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    }
};