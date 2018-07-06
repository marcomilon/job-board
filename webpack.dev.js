const merge = require('webpack-merge')
const common = require('./webpack.common.js')

process.env.BABEL_ENV = 'development'
process.env.NODE_ENV = 'development'

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        host: 'localhost',
        port: 3000,
        open: true,
        historyApiFallback: true
    }
})