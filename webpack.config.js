const autoprefixer = require("autoprefixer");

module.exports = [{
    mode: "production",
    entry: [
        "./styles_complex/theme_default.scss",
        "./scripts_complex/settings.js"
    ],
    output: {
        filename: "./scripts_complex/settings_compiled.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "./styles_complex/theme_default.css"
                        }
                    },
                    {
                        loader: "extract-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer()
                                ]
                            }
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            webpackImporter: false,
                            sassOptions: {
                                includePaths: [
                                    "./node_modules"
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env"
                    ]
                }
            }
        ]
    }
}]
