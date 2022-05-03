const path = require('path')
const webpack = require('webpack')
const htmlWebPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: {
            import: './src/index.js',
            dependOn: 'shared'
        },
        test: {
            import: './src/test.js',
            dependOn: 'shared'
        },
        shared: 'lodash'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js' // Quando runtimeChunk é true
    },
    devServer: {
        historyApiFallback: true,
        hot: true // HMR (Reload de algumas funcionalidades em dar build novamente)
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src') // Melhora performance só lendo js dentro de src
            }
        ]
    },
    mode: 'development',
    plugins: [
        new webpack.ProvidePlugin({
            _: 'lodash'
        }),
        new htmlWebPlugin({
            title: 'Recursos Webpack'
        })
    ],
    optimization: {
        runtimeChunk: true
    }
}