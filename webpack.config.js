// webpack.config.js

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        /*
         * test 에 있는 대상에 use 명시된 규칙을 적용한다
         */
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    /* https://kr.vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only */
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'Component': path.resolve(__dirname, 'src/component'),
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    /* https://vue-loader.vuejs.org/guide/extract-css.html#css-extraction */
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
};
