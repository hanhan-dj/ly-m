// postcss.config.js  处理CSS文件的插件
module.exports = {
  plugins: {
    //   'autoprefixer':{
    //     browsers:['Android >= 4.0','ios >= 8']
    //   },
    // 因为VueCLI内部配置过了，所以不需要再配置一遍

    // 把px转为rem
    'postcss-pxtorem': {
    // lib-flexible的REM适配方案，把一行分为十分，每份就是十分之一
    // 所以rootValue应该设置设计稿的十分之一
    // 但是vant的建议设置为37.5（vant基于375）
    // 官方文档里显示rootValue支持两种类型：数字、函数
      rootValue ({ file }) { // 参数解构
        return file.indexOf('vant') !== -1 ? 37.5 : 75
        // 把vant的按37,5处理 把自己的设计稿按75处理^_^
      },
      //  rootValue: 37.5,
      // 配置要转换的CSS属性，*表示转换所有
      propList: ['*']
    }
  }
}
