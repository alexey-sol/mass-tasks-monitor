const path = require("path");

module.exports = {
    entry: {
        main: "./src/index.tsx"
    },

    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
        alias: {
            components: path.resolve(__dirname, "src/components/"),
            styles: path.resolve(__dirname, "src/styles/"),
            types: path.resolve(__dirname, "src/types/"),
            utils: path.resolve(__dirname, "src/utils/")
        }
    },

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
