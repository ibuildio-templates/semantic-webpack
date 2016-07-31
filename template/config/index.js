var pkg = require('../package')

module.exports = {
  build: {
    env: {
      NODE_ENV: '"production"'
    },
    src: pkg.config.dir.src,
    index: 'index.html',
    assetsRoot: pkg.config.dir.dist,
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
    src: pkg.config.dir.src,
    port: 8080,
    assetsRoot: pkg.config.dir.dist,
    assetsSubDirectory: './',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false,
  }
}
