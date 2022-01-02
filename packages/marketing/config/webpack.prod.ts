import { Configuration, container } from 'webpack';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';
const packageJSON = require('../package.json');

const ModuleFederationPlugin = container.ModuleFederationPlugin;

const prodConfig: Configuration = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/marketing/latest',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MountMarketingApp': './src/mount',
      },
      shared: {
        ...packageJSON.dependencies,
        ...packageJSON.devDependencies,
      },
    }),
  ],
};

export default merge(commonConfig, prodConfig);
