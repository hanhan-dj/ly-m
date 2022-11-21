// 请求模块
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0/authorizations' // 接口的基准路径
})

// 请求拦截器

// 相应拦截器
export default request
