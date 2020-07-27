const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  watch: true,
  entry: './assets/js/script.js',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: './dist.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,// Set loaders to transform files.
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader", },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,// Set loaders to transform files.
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: 'images'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "dist.bundle.css"
    }),
  ]
};