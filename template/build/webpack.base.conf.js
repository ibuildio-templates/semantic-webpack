var utils = require('./utils')

module.exports = {
  entry: {
    app: utils.config('src') + 'index.js'
  },
  node: {
    fs: "empty"
  },
  output: {
    path: utils.assetsRootPath('/'),
    publicPath: utils.assetsPublicPath(),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [utils.rootPath('/node_modules')],
    alias: {
      'src': utils.srcPath('/'),
      'assets': utils.srcPath('/assets'),
      'components': utils.srcPath('/components'),
      'handlebars': 'handlebars/runtime.js'
    }
  },
  resolveLoader: {
    fallback: [utils.rootPath('/node_modules')]
  },
  module: {
    {{#lint}}
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: utils.rootPath(),
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: utils.rootPath(),
        exclude: /node_modules/
      }
    ],
    {{/lint}}
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: utils.rootPath('/'),
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  {{#lint}}
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  {{/lint}}
  vue: {
    loaders: utils.cssLoaders()
  }
}
