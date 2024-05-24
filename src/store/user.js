import { defineStore } from 'pinia';
import { getRouterList,login,logOut } from '@/api/base.js';
import router from "@/router";
import { routerHandle } from "@/utils/routerHandle.js";
export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    userInfo: {},
    asyncRouter: null,
    isRefresh:true
  }),
  actions: {
    setToken(newValue) {
      this.token = newValue;
    },
    setIsRefresh(newValue) {
      this.isRefresh = newValue
    },
    setUserInfo(newValue) {
      this.userInfo = newValue;
    },
    resetState() {
      this.token = '';
      this.userInfo = {};
      this.asyncRouter = null;
      this.isRefresh = true;
    },
    login(params) {
      login(params).then( async res => {
        const { successed, message, token, data } = res;
        if (successed) {
          this.token = token;
          this.userInfo = data;
          this.isRefresh = false;
          await this.getAsyncRouter();
          router.push({
            path: '/layout'
          })
        }
      })
    },
    getAsyncRouter() {
      return new Promise((resolve,reject) => {
        getRouterList().then(res => {
          const { data, successed } = res;
          if (successed) {
            const _router = routerHandle(data);
            this.asyncRouter = data;                    
            resolve(_router);
          }
        }).catch(error => {
          reject(error);
        })
      })
      
    }
  },
  persist: {
    enabled: true,
    strategies: [
    //   // {
    //   //   key: 'user',
    //   //   storage: localStorage,
    //   //   paths: ['token'] 
    //   // },
    //   // { storage: sessionStorage, paths: ['name'] }, 
    //   // { storage: localStorage, paths: ['age'] },
    {
      storage: sessionStorage,
      paths: ['token', 'userInfo','asyncRouter']
    }
    ],
  }
})