import axios from 'axios'
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL:
    'https://www.fastmock.site/mock/bflfcb3c2e2945669c2c8d0ecb8009b8/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;chasrt=utf-8'
  }
})

// 請求攔截
service.interceptors.request.use((config) => {
  config.headers = config.headers || {}
  if (localStorage.getItem('token')) {
    config.headers.token = localStorage.getItem('token') || ''
  }
  return config
})

// 響應攔截
service.interceptors.response.use(
  (res) => {
    const code = res.data.code
    if (code != '0002') {
      return Promise.reject(res.data)
    }
    return res.data
  },
  (err) => {
    console.log(err)
  }
)

export default service
