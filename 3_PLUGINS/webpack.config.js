const path = require('path')
const terserPlugin = require('terser-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
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
        new miniCssExtractPlugin({ /* Adiciona o plugin JS */
            filename: 'styles.css' 
        })
    ]
}