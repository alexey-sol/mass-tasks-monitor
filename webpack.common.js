const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
    entry: {
        main: "./src/index.tsx"
    },

    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
        alias: {
            components: path.resolve(__dirname, "src/components/"),
            pages: path.resolve(__dirname, "src/pages/"),
            styles: path.resolve(__dirname, "src/styles/"),
            types: path.resolve(__dirname, "src/types/"),
            utils: path.resolve(__dirname, "src/utils/")
        }
    },

    plugins: [
        new Dotenv()
    ],

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]"
                    }
                }
            }
        ]
    }
};
