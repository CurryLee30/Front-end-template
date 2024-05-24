const routes = [  
  {
    path: '/',
    redirect: '/login'
  },
  // {  
  //   path: '/layout',  
  //   name: 'Layout',  
  //   component: () => import('@/views/layout/index.vue'),
  //   redirect: '/layout/mine', // 添加重定向到 Mine  
  //   children: [
  //     {  
  //       path: 'mine',  
  //       name: 'Mine',  
  //       component: () => import('@/views/mine/index.vue'),
  //       meta: {
  //         title:"我的"
  //       }
  //     }, 
  //     {  
  //       path: 'home',  
  //       name: 'Home',  
  //       component: () => import('@/views/home/index.vue'),
  //       meta: {
  //         title:"首页"
  //       }
  //     },
  //   ]
  // },  
  {  
    path: '/login',  
    name: 'Login',  
    component: () => import('@/views/login/index.vue'),
    meta: {
      title:"登录"
    }
  }, 
  {  
    path: '/registry',  
    name: 'Registry',  
    component: () => import('@/views/login/registry.vue'),
    meta: {
      title:"注册"
    }
  }, 
  {  
    path: '/404',  
    name: '404',  
    component: () => import('@/views/errPage/404.vue'),
    meta: {
      title:"NotFound"
    }
  }, 
  
  // {
  //   path: '/:pathMatch(.*)',
  //   redirect:'/404'
  // }
  
  // ... 其他路由  
]  
  
export default routes;