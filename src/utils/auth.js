export const addDynamicRoutes = (router, routes) => {  
  routes.forEach(route => {  
    // 根据你的后端返回的数据结构，这里可能需要一些转换  
    router.addRoute(route); 
  });  
}