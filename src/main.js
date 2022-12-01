import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载Vant核心组件
import Vant from 'vant'
// 加载Vant全局样式
import 'vant/lib/index.css'
// 加载全局样式
import './styles/index.less'
// 加载动态设置REM基准值
import 'amfe-flexible'
// // 加载echarts
// import 'echarts'
// import ECharts from 'vue-echarts'
// 注册使用Vant组件库
Vue.use(Vant)

// // 全局注册组件（也可以使用局部注册）
// Vue.component('v-chart', ECharts)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
