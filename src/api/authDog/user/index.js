import {
  Service
} from '@/utils/request.js';

//用户注册
export function registry(params) {
  return Service({
      url: "/api/v1/user/public/register",
      method: "post",
      data: params
  })
}

//用户登录
export function login(params) {
  return Service({
      url: '/api/v1/user/public/login',
      method: "post",
      data: params
  })
}