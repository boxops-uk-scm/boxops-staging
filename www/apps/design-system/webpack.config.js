import { resolve } from 'path';

import StylexPlugin from '@stylexjs/webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default (env, argv) => ({
  entry: './src/index.tsx',
  output: {
    path: resolve(env['ROOT'], 'www', 'apps', 'design-system', 'dist'),
    filename: 'bundle.[fullhash].js',
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['node_modules', '../../node_modules'],
  },
  plugins: [
    new StylexPlugin({
      filename: 'styles.[contenthash].css',
      dev: argv.mode === 'development',
      runtimeInjection: false,
      classNamePrefix: 'bx',
      unstable_moduleResolution: {
        type: 'commonJS',
        rootDir: '.',
      },
    }),
    new HtmlWebpackPlugin({
      templateContent: `
      <html>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@100..900&display=swap" rel="stylesheet">
        </head>
        <body style="margin: 0;">
          <div id="root" style="display: contents" />
        </body>
      </html>
    `,
      filename: 'design-system/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: {
          loader: 'babel-loader',
          options: {
            rootMode: 'upward',
          },
        },
        exclude: /node_modules/,
        include: [resolve(env['ROOT'], 'www', 'apps', 'design-system', 'src'), resolve(env['ROOT'], 'www', 'packages')],
      },
      {
        test: /\.css$/i,
        loader: 'css-loader',
        options: {
          url: true,
        },
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /react/,
            use: ['@svgr/webpack', 'url-loader'],
          },
          {
            resourceQuery: /url/,
            type: 'asset/resource',
          },
          {
            use: ['url-loader'],
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  cache: true,
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /^\/design-system/, to: '/design-system/index.html' }],
    },
    open: ['/design-system'],
  },
});
