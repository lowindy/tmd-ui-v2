const debug = process.env.NODE_ENV !== 'production';
module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    // 清除已有的所有 loader,如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear();
    // 添加要替换的 loader
    svgRule.use('svg-sprite-loader').loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      });
  },
  // 根域上下文目录
  publicPath: './',
  // 构建输出目录
  outputDir: process.env.outputDir, // 'dist',
  // 静态资源目录 (js, css, img, fonts)
  assetsDir: 'assets',
  // 编译文件选择
  indexPath: process.env.indexPath, // 'index.html',
  // 是否开启eslint保存检测，有效值：ture | false | 'error'
  lintOnSave: true,
  // 运行时版本是否需要编译
  runtimeCompiler: true,
  // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
  transpileDependencies: [],
  // webpack的特殊配置
  configureWebpack: config => {
    if (debug) {
      config.devtool = 'source-map';
    }
    config.externals = {
      'jquery': 'jQuery'
    };
  },
  // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  productionSourceMap: true,
  // 构建时开启多进程处理babel编译
  parallel: require('os').cpus().length > 1,
  // 第三方插件配置
  pluginOptions: {},
  // 开发服务配置
  devServer: {
    open: 'Chrome',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: process.env.VUE_APP_API_ADDR,
    before: app => {}
  }
};
