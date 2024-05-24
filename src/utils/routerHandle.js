import router from '@/router';
export const routerHandle = (rawRoutes = []) => {
  const dynamicRoutes = rawRoutes.map(routeData => {  
    // 处理 children，如果它们存在的话  
    const children = routeData.children ? routeData.children.map(childData => ({  
      path: childData.path,  
      name: childData.name,  
      component: () => import(`@/views/${childData.component}/index.vue`), // 假设组件在 views 目录下  
      meta: childData.meta,  
    })) : [];  

    // 返回 Vue Router 格式的路由配置  
    const routeItem =  {  
      path: routeData.path,  
      component: () => import(`@/views/${routeData.component}/index.vue`), // 假设布局组件在 views 目录下  
      name: routeData.name,  
      redirect: routeData.redirect,  
      children, // 添加子路由  
      // ... 其他你可能需要的配置  
    }; 
    // 动态添加路由 
    router.addRoute(routeItem);
    return routeItem
  }); 
 
  return dynamicRoutes;
}