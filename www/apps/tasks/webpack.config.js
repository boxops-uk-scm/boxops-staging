import { resolve } from 'path';

import StylexPlugin from '@stylexjs/webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default (env, argv) => ({
  entry: './src/index.tsx',
  output: {
    path: resolve(env['ROOT'], 'www', 'apps', 'tasks', 'dist'),
    filename: 'bundle.[fullhash].js',
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
          <title>Tasks</title>
          <link rel="stylesheet" href="default.css">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap" rel="stylesheet">
          </head>
        <body style="margin: 0;">
          <div id="root"></div>
        </body>
      </html>
    `,
      filename: 'tasks/index.html',
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
        include: [resolve(env['ROOT'], 'www', 'apps', 'tasks', 'src'), resolve(env['ROOT'], 'www', 'packages')],
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
        use: ['@svgr/webpack', 'url-loader'],
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
    static: ['dist', 'public'],
    historyApiFallback: true,
    open: ['/tasks'],
  },
});
