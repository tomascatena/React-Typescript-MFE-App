import { Configuration, container } from 'webpack';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';
const packageJSON = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const ModuleFederationPlugin = container.ModuleFederationPlugin;

const prodConfig: Configuration = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketingApp: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: {
        ...packageJSON.dependencies,
        ...packageJSON.devDependencies,
      },
    }),
  ],
};

export default merge(commonConfig, prodConfig);
