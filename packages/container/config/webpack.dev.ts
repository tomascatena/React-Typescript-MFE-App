import { Configuration, container } from 'webpack';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';

const packageJSON = require('../package.json');

const ModuleFederationPlugin = container.ModuleFederationPlugin;

const devConfig: Configuration = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 8080,
    hot: true,
    historyApiFallback: {
      disableDotRule: true,
    },
  },
  plugins: [
    new ReactRefreshPlugin(),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketingApp: 'marketing@http://localhost:8081/remoteEntry.js',
        authApp: 'auth@http://localhost:8082/remoteEntry.js',
      },
      shared: {
        ...packageJSON.dependencies,
        ...packageJSON.devDependencies,
      },
    }),
  ],
};

export default merge(commonConfig, devConfig);
