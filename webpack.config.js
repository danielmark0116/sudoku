const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  const envValue = env || 'production';

  let optimizationObject = {
    minimize: envValue === 'development' ? false : true
  };

  let pluginsArray = [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ];

  const babelPlugins = ['@babel/plugin-proposal-class-properties'];

  return {
    mode: envValue,
    entry: './src/index.js',
    optimization: optimizationObject,
    output: {
      path: path.resolve(__dirname, 'docs'),
      filename: 'app.bundle.js'
    },
    devServer: { port: 3000 },
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            plugins:
              envValue === 'development'
                ? [...babelPlugins, 'react-hot-loader/babel']
                : babelPlugins
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            },
            'sass-loader'
          ]
        }
      ]
    },
    plugins: pluginsArray
  };
};
