const webpack = require('webpack')

const APP_DIR = `${__dirname}/app/client`
const BUILD_DIR = `${__dirname}/public`

const env = process.env.NODE_ENV || 'development'

module.exports = {
  mode: env,
  optimization: { minimize: env === 'production' },
  entry: `/app/client/index.js`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        include: APP_DIR,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      }
    ]
  }
}