import { Configuration, container } from 'webpack';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';
const packageJSON = require('../package.json');

const ModuleFederationPlugin = container.ModuleFederationPlugin;

const PORT = 8082;

const devConfig: Configuration = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: PORT,
    hot: true,
    historyApiFallback: {
      disableDotRule: true,
    },
  },
  output: {
    publicPath: `http://localhost:${PORT}/`,
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
