const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
const merge = require("webpack-merge");

const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "production",

    output: {
        filename: "[name].[hash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                minify: {
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeComments: true
                }
            })
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].[hash].css" }),
        new CleanWebpackPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.module\.s[ac]ss$/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
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
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    }
});
