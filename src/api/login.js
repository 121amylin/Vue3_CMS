import request from './request'
// export const login = (data) => {
//   console.log(data)
//   return request({
//     url: '/login',
//     method: 'post',
//     data
//   })
// }

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
