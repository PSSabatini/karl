const path = require('path');
const webpack = require('webpack');
const { readFileHistory } = require('./history.js');
const lintRules = require(path.resolve(__dirname, '../.eslintrc.js'));
const fileHistory = readFileHistory('src/components', /story\.js/);

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          data: '@import "src/scss/build_helper.scss";'
        }
      }
    ],
    include: path.resolve(__dirname, '../'),
  });
  config.resolve.alias = {
    ...config.resolve.alias,
    "@": path.resolve(__dirname, "../src"),
  };
  config.module.rules.push({
    test: /\.vue$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
    options: {
      ...lintRules,
    },
  });
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'historyfile': fileHistory,
      }
    })
  );
  // Return the altered config
  return config;
};