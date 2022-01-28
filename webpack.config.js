const PostCSSPresetEnv = require('postcss-preset-env');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',

  entry: "./src/assets/webpack/main.js",

  output: {
    path: `${__dirname}/_site/assets/webpack`,
    filename: 'main.js'
  },

  plugins: [
    new WebpackManifestPlugin({ fileName: 'manifest.json' }),
    new MiniCssExtractPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
              ],
            },
          },
        ],
      },
      {
        test: /\.s?css/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  PostCSSPresetEnv()
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
    ],
  },

  externals: {
    // 外部のjQueryを利用する
    // 利用したい場合は import $ from 'jquery'; とする
    jquery: 'jQuery'
  },
};