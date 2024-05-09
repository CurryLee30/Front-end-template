// index.js  
import { createRouter, createWebHistory } from 'vue-router'  
import routes from './routes'  
// import { useUserStore } from '@/store/user.js';
// const userStore = useUserStore();
const router = createRouter({  
  history: createWebHistory(),
  routes  
})  


// router.beforeEach((to, from, next) => {  
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);  
//   if (requiresAuth && !userStore.token) { // 如果用户未登录且尝试访问需要认证的路由，则重定向到登录页 
//     next('/login');  
//   } else {  
//     next(); // 确保一定要调用 next() 方法来 resolve 这个钩子  
//   }  
// });
 





export default router;