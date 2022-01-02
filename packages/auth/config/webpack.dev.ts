import { Configuration, container } from 'webpack';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';
const packageJSON = require('../package.json');

const ModuleFederationPlugin = container.ModuleFederationPlugin;

const devConfig: Configuration = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 8082,
    hot: true,
    historyApiFallback: {
      disableDotRule: true,
    },
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

export default merge(commonConfig, devConfig);
