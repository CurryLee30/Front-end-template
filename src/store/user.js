import { defineStore } from 'pinia';
import { getRouterList } from '@/api/base.js';
// import { router } from "@/router";
export const useUserStore = defineStore('user', {  
  state: () => ({  
    token: '',
    userInfo: {},
    asyncRouter:null
  }),  
  actions: {  
    setToken(newValue) {  
      this.token = newValue; 
    },
    setUserInfo(newValue) {
      this.userInfo = newValue;
    },
    resetState() {
      this.token = '';
      this.userInfo = {};
    },
    getAsyncRouter() {
      getRouterList().then(res => {
        console.log('getRouterList',res)
      })
    }
  },
  persist: {
    enabled: true,
    // strategies: [
    //   {
    //     key: 'user',
    //     storage: localStorage,
    //     paths: ['token'] 
    //   },
    //   { storage: sessionStorage, paths: ['name'] }, // 
    //   { storage: localStorage, paths: ['age'] },
    // ],
  }
})