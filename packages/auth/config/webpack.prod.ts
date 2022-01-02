import { Configuration, container } from 'webpack';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';
const packageJSON = require('../package.json');

const ModuleFederationPlugin = container.ModuleFederationPlugin;

const prodConfig: Configuration = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/auth/latest',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './MountAuthApp': './src/mount',
      },
      shared: {
        ...packageJSON.dependencies,
        ...packageJSON.devDependencies,
      },
    }),
  ],
};

export default merge(commonConfig, prodConfig);
