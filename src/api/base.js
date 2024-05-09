import {
  Service
} from '@/utils/request.js';

export function login(params) {
  return Service({
      url: '/authModule/login',
      method: "post",
      data: params
  })
}

export function registry(params) {
  return Service({
      url: '/authModule/registry',
      method: "post",
      data: params
  })
}

export function getUersList(params) {
  return Service({
      url: '/users/getData',
      method: "get",
      params
  })
}