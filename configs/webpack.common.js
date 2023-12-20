const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const srcDir = path.join(__dirname, "..", "src");

module.exports = {
    entry: {
      popup: path.join(srcDir, 'popup.ts'),
      background: path.join(srcDir, 'background.ts'),
      content: path.join(srcDir, 'content.ts'),
    },
    output: {
        path: path.join(__dirname, "../build"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/popup.html',
            filename: 'popup.html',
        }),
        new CopyPlugin({
            patterns: [
                { 
                    from: "public",
                     to: "."
                },
                { 
                    from: "./src/popup.css",
                     to: "."
                }
            ],
            options: {},
        }),
        
    ],
};