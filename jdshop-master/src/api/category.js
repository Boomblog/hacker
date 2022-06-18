import request from './request'
// 获得所有分类
export const getAllCategories = () => {
  return request({
    url: '/api/tabs',
    method: 'get'
  }).then(res => {
    const list = res.list.slice(1)
    return list
  })
}
//  根据分类ID查询该分类下的子分类
export const getSubCategories = id => request({
  url: '/api/tab/' + id,
  method: 'get'
}).then(res => res.categories)
