const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    module: {
        rules: [{
            test: /\.html$/,
            use: [
                {
                    loader: "html-loader",
                    options: {minimize: true}
                }
            ]
        },
        {
            test: /\.scss$/,
            use: [
                "style-loader", //Sirve para procesar estilos en linea
                "css-loader", //Sirve para procesar archivos en csss
                "sass-loader" //Sirve para procesar estilos en archivos scss( SASS )
            ]
        },
        {
            test: /\.js$/, // Buscara todos los archivos JS en el proyecto
            exclude: /node_modules/, //Omitir carpeta de node_modules
            use: { 
                loader: "babel-loader" //carga babel
            }
        },
         {
            test: /\.(png|jpg|svg|gif|jpeg)$/,
            use: [
                "file-loader" // Sirve para optimizar archivos utilizando babel
            ]           
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        },
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
        )
    ]
}