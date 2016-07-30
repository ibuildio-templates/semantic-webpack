var path = require('path')
var pkg = require('../package')

/* get the source and distribution folders from package.json */
var root = path.resolve(__dirname, '../')
var dist = path.resolve(__dirname, '../' + pkg.config.dir.dist)
var src = path.resolve(__dirname, '../' + pkg.config.dir.src)

module.exports = {
  build: {
    env: {
      NODE_ENV: '"production"'
    },
    src: src,
    root: root,
    index: dist + '/index.html',
    assetsRoot: dist,
    assetsSubDirectory: './',
    assetsPublicPath: '/',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: {
      NODE_ENV: '"development"'
    },
    src: src,
    root: root,
    port: 8080,
    assetsRoot: dist,
    assetsSubDirectory: './',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false,
  }
}
