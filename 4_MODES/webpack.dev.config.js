const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js' // Concertar problema de cache (Precisa do plugin htmlWebpackPlugin)
    },
    mode: 'development',
    plugins: [
        new CleanWebpackPlugin()
    ]
}