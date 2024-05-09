import { defineStore } from 'pinia';
export const useUserStore = defineStore('user', {  
  state: () => ({  
    token: '',
    userInfo:{}
  }),  
  actions: {  
    setToken(newValue) {  
      this.token = newValue; 
    },
    setUserInfo(newValue) {
      this.userInfo = newValue;
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