process.env.NODE_ENV = process.env.NODE_ENV || 'production'

var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var config = process.env.NODE_ENV === 'production' ? require('../config').build : require('../config').dev

exports.config = function (arg) {
  return arg ? config[arg] : config
}

exports.srcPath = function (_path) {
  return path.resolve(config.src, _path || '')
}

exports.rootPath = function (_path) {
  return path.resolve(config.root, _path || '')
}

exports.assetsPath = function (_path) {
  return path.posix.join(config.assetsSubDirectory, _path || '')
}

exports.assetsRootPath = function (_path) {
  return path.resolve(config.assetsRoot, _path || '')
}

exports.assetsPublicPath = function (_path) {
  return config.assetsPublicPath + ( _path || '')
}

exports.cssLoaders = function (options) {
  options = options || {}
  // generate loader string to be used with extract text plugin
  function generateLoaders (loaders) {
    var sourceLoader = loaders.map(function (loader) {
      var extraParamChar
      if (/\?/.test(loader)) {
        loader = loader.replace(/\?/, '-loader?')
        extraParamChar = '&'
      } else {
        loader = loader + '-loader'
        extraParamChar = '?'
      }
      return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '')
    }).join('!')

    if (options.extract) {
      return ExtractTextPlugin.extract('vue-style-loader', sourceLoader)
    } else {
      return ['vue-style-loader', sourceLoader].join('!')
    }
  }

  // http://vuejs.github.io/vue-loader/configurations/extract-css.html
  return {
    css: generateLoaders(['css']),
    postcss: generateLoaders(['css']),
    less: generateLoaders(['css', 'less']),
    sass: generateLoaders(['css', 'sass?indentedSyntax']),
    scss: generateLoaders(['css', 'sass']),
    stylus: generateLoaders(['css', 'stylus']),
    styl: generateLoaders(['css', 'stylus'])
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      loader: loader
    })
  }
  return output
}
