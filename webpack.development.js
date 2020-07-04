const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const path = require("path");

const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "development",

    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],

    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.module\.s[ac]ss$/,
                loader: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[name]__[local]--[hash:base64:5]"
                            }
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.s[ac]ss$/,
                loader: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    }
});
