import { Configuration, container } from 'webpack';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';
const packageJSON = require('../package.json');

const ModuleFederationPlugin = container.ModuleFederationPlugin;

const devConfig: Configuration = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketingApp: 'marketing@http://localhost:8081/remoteEntry.js',
      },
      shared: {
        ...packageJSON.dependencies,
        ...packageJSON.devDependencies,
      },
    }),
  ],
};

export default merge(commonConfig, devConfig);
