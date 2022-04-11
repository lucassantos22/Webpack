const path = require('path')
const terserPlugin = require('terser-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const { DefinePlugin } = require('webpack')
const dotenv = require('dotenv-webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js' // Concertar problema de cache (Precisa do plugin htmlWebpackPlugin)
    },
    mode: 'development',
    optimization: { /* Minificar Js Gerado (Já faz isso em prod nativamente) */
        minimize: true,
        minimizer: [new terserPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    miniCssExtractPlugin.loader, 'css-loader' /* Minifica CSS gerado em outro arquivo */
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), /* Limpa arquivos desnecessários na pasta de build */
        new miniCssExtractPlugin({ /* Minifica o CSS */
            filename: '[name].[contenthash].css'  // Concertar problema de cache (Precisa do plugin htmlWebpackPlugin)
        }),
        new DefinePlugin({ /* Adiciona constantes globais */
            VERSION: JSON.stringify('1.0.1'),
            PORT: JSON.stringify(8080)
        }),
        new dotenv(),
        new htmlWebpackPlugin() // Buildar o index.html,

    ]
}