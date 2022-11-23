/**
* 用户相关的请求模块
*/
import request from '@/utils/request'
/**
* 用户登录
*/
export const login = data => {
  return request({
    method: 'POST',
    // 下面的不用写全，之前在request.js里写过baseURL
    url: 'http://geek.itheima.net/v1_0/authorizations',
    // 属性名和属性值同名，简写。原：data：data
    data
  })
}
/*
*发送验证码，每个手机号每分钟只能发送一次
*/
export const sendSms = mobile => {
  return request({
    method: 'GET',
    // 这个接口已经不能用了(后台没充钱)
    url: `/v1_0/sms/codes/${mobile}`
  })
}
