const HtmlWebPackPlugin = require("html-webpack-plugin");
const path= require("path");

module.exports = {
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/i,
                use:  [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    }
                ],
                include: /\.module\.css$/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
                exclude: /\.module\.css$/
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
    resolve: {
        alias: {
            "@acomponents": path.resolve(__dirname, 'src/admin/components'),
            "@acontainers": path.resolve(__dirname, 'src/admin/containers'),
            "@ccomponents":path.resolve(__dirname, 'src/client/components'),
            "@ccontainers":path.resolve(__dirname, 'src/client/containers'),
            "@astore":path.resolve(__dirname, 'src/common/redux/reducers'),
            "@apicomponents":path.resolve(__dirname, 'src/common/api/api'),
        }
    }
};