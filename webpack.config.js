const { VueLoaderPlugin } = require(`vue-loader`);
const path = require(`path`);

const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const webpack = require('webpack');
const MonacoWebpackPlugin = require(`monaco-editor-webpack-plugin`);

const env = process.env.NODE_ENV;
const minify = env === `production`;
const sourceMap = env === `development`;
const convert = require('koa-connect');
const history = require('connect-history-api-fallback');
function resolve(dir) {
  return path.join(__dirname, dir);
}

const config = {
  entry: path.join(__dirname, `src`, `index.js`),
  mode: env,
  output: {
    publicPath: `/`
  },
  resolve: {
    alias: {
      '@': resolve('src/app/Content')
    }
  },
  optimization: {
    splitChunks: {
      chunks: `all`
    }
  },
  devtool: sourceMap ? `cheap-module-eval-source-map` : undefined,
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: `vue-loader`,
            options: {
              transformAssetUrls: {
                source: './src/'
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['css-loader']
      },
      {
        test: /\.js$/,
        loader: `babel-loader`,
        include: [path.join(__dirname, `src`)]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: `style-loader`
          },
          {
            loader: `css-loader`
          },
          {
            loader: `less-loader`
          }
        ]
      },
      {
        test: /\.styl/,
        use: [
          {
            loader: `style-loader`
          },
          {
            loader: `css-loader`
          },
          {
            loader: `stylus-loader`
          }
        ]
      },
      {
        test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani|eot|svg)$/,
        loader: `url-loader`,
        options: {
          name: `[name].[hash:20].[ext]`,
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, `dist`, `index.html`),
      template: path.join(__dirname, `static`, `index.html`),
      inject: true,
      minify: minify
        ? {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
          }
        : false
    })
  ],
  serve: {
    content: [__dirname],
    add: app => {
      app.use(convert(history()));
    },
    port: 8081
  }
};

if (env !== `development`) {
  config.plugins.push(new MiniCssExtractPlugin());
}



module.exports = config;


