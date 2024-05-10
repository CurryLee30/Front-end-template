import {
  Service
} from '@/utils/request.js';


//用户登录
export function login(params) {
  return Service({
      url: '/authModule/login',
      method: "post",
      data: params
  })
}

//用户注册
export function registry(params) {
  return Service({
      url: '/authModule/registry',
      method: "post",
      data: params
  })
}


//用户登出
export function logOut(params={}) {
  return Service({
      url: '/authModule/logout',
      method: "get",
      params
  })
}


//用户列表
export function getUersList(params) {
  return Service({
      url: '/users/getData',
      method: "get",
      params
  })
}


//获取权限路由
export function getRouterList(params) {
  return Service({
      url: '/asyncRouter/getRouter',
      method: "get",
      params
  })
}