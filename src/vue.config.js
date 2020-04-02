const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {

  // 输出文件目录
  outputDir: 'dist',
  // 放置生成的静态资源目录
  assetsDir: '',
  // eslint-loader 产品模式不校验
  lintOnSave: true,
  productionSourceMap: false,
  // webpack-chain 配置公共部分
  chainWebpack: config => {
    config.resolve.alias
      .set('@a', resolve('src/assets'))
      .set('@c', resolve('src/components'))
      .set('@v', resolve('src/views'))
  },
  // webpack-dev-server 相关配置
  devServer: {
    hot: true,
    port: 8080,
    https: false,
    overlay: {
      // 浏览器提示
      warnings: true,
      errors: true
    },
    before: app => {}
  }
}
