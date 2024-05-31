// index.js  
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import { useUserStore } from '@/store/user';
import { routerHandle } from '@/utils/routerHandle.js';
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 检查是否存在于免登陆白名单
function inWhiteList(toPath) {
  const getRouters = router.getRoutes();
  const authList = getRouters.map(item => {
    return item.path
  });
  if (authList.includes(toPath)) {
    return true
  } 
}

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  const toPath = to.path;
  const _token = userStore.token;
  if (inWhiteList(toPath)) {
    next();
  } else {
    if (_token) {
      if (userStore.isRefresh) { //是否刷新页面   
        userStore.setIsRefresh(false)
        routerHandle(userStore.asyncRouter);
        next({...to,replace:true});    
      } else {
        next('/404')
      }
      
    } else {
      next('/login');
    }
  }
});
export default router;