import request from './request'

export const getBanners = () => {
  return request({
    url: '/api/tab/1?start=0',
    method: 'get'
  }).then(res => {
    return res.banners
  })
}
