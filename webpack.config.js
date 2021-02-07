"use strict";

const path = require('path');

module.exports = {
    mode: "development",
    entry: './frontend/app.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'public/js')
    },
    devtool: "source-map",
    module: {
        rules: [
                {
                    test: /\.hbs$/,
                    loader: "handlebars-loader"
                }
        ]
    },
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, '.'),
        compress: true,
        port: 9000,
    },
};