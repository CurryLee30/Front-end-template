import axios from "axios";
import { useUserStore } from '@/store/user.js';
import router from '@/router';
const isPro = import.meta.env.MODE === 'production';
// import store from '@/store';

// import Qs from "qs"
const ConfigBaseURL =isPro? 'http://localhost:3001/':'/api';

//使用create方法创建axios实例
export const Service = axios.create({
  timeout: 10000, // 请求超时时间
  baseURL: ConfigBaseURL,
  method: "post",
  withCredentials:true,
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  },
});
const err = error => {
  const userStore = useUserStore();
  closeToast();
  if (error.response) {  
    const status = error.response.data?.code || error.response.status;
    const errMessage = error.response.data?.message || error.response.statusText
    // console.log("error666", error);
    showNotify({ type: 'danger', message: `${status} ${errMessage}!` });
    if (status == '401') { //token失效，重新登录获取
      userStore.resetState();
      router.push({
        name:"Login"
      })

    }
    // 这里还需要添加登录失效，清空token，跳转到登录页面
  }
  return Promise.reject(error)
};
// 添加请求拦截器
Service.interceptors.request.use(
  (config) => {
    showLoadingToast({
      duration: 0, // 持续展示 toast
      message: "加载中...",
      forbidClick: true,
    }); 
    // console.log("config1111", config);
    const userStore = useUserStore();
    const token = userStore.token;
    if (token) {
      config.headers['Authorization'] = token;
    }
    config.data = config.data || {}

    // config.data = Qs.stringify(config.data)
    return config;
  }, err
);
// 添加响应拦截器
Service.interceptors.response.use(
  (response) => {
    //移动端
    closeToast();
    // console.log('response', response)
    if (response.status === 200) { 
      
      // const { code } = response.data
      const tempResultCode = response.data.code;
      const successed = response.data.code === 200
      if (tempResultCode ==='') { // 登录超时
        // Notify({ type: 'danger', message: '登录超时:authorization verification failed!' });              
        // showToast({
        //   message: response.data.msg,
        //   duration: 1000
        // });
          // store.dispatch('clearAll').then(() => {
          
          // })
      }
      return { ...response.data, successed }
      // return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  }, err
);
