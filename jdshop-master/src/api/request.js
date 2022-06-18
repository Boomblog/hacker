// 实现二次封装
import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://www.xiongmaoyouxuan.com',
  timeout: 5000
})

// 请求拦截
service.interceptors.response.use(config => {
  // 添加认证token请求头信息
  // todo：
  return config
})

// 响应拦截
service.interceptors.response.use(config => {
  if (config.status >= 200 && config.status < 300) {
    // 处理服务器端
    if (config.data.code === 200) {
      return config.data.data
    }
    return Promise.reject(config.data)
  }
  return Promise.reject(config)
})

export default service
