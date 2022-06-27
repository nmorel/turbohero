const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const path = require('node:path')

const isProd = process.env.NODE_ENV === 'production'
const isFastRefreshEnabled = process.env.FAST_REFRESH === 'true'

function getBabelConfig() {
  const defaultBabelConfig = require('@mrvl/config-babel')
  if (isFastRefreshEnabled) {
    defaultBabelConfig.plugins ??= []
    defaultBabelConfig.plugins.push('react-refresh/babel')
  }
  return defaultBabelConfig
}

module.exports = {
  entry: ['./src/index'],
  output: {
    filename: `[name]-[contenthash].js`,
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },
  experiments: {
    topLevelAwait: true,
  },
  optimization: {
    minimize: isProd,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 2018,
        },
      }),
    ],
  },
  devtool: isProd ? false : 'eval',
  devServer: {
    host: '0.0.0.0',
    liveReload: !isFastRefreshEnabled,
    hot: isFastRefreshEnabled,
    port: 3000,
    allowedHosts: 'all',
    static: ['public'],
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  mode: isProd ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules\//,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              configFile: false,
              ...getBabelConfig(),
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      templateContent: () => {
        return `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8" />
                <title>MCU - Phase One</title>
              </head>
              <body>
                <div id="root"></div>
              </body>
            </html>
          `
      },
    }),
    ...(isFastRefreshEnabled ? [new ReactRefreshWebpackPlugin()] : []),
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    symlinks: true,
  },
}
