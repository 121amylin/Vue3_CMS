import axios from 'axios'

import { ElMessage } from 'element-plus'
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: 'http://127.0.0.1:5000/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;chasrt=utf-8'
  }
})

// 請求攔截
// service.interceptors.request.use((config) => {
// config.headers = config.headers || {}
// if (localStorage.getItem('token')) {
//   config.headers.token = localStorage.getItem('token') || ''
// }
// return config
// })

// 響應攔截
service.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    ElMessage.error(err)
  }
)

export default service
