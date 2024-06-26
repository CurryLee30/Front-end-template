import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persist';
import App from './App.vue';
import router from './router/index';
const pinia = createPinia();
pinia.use(piniaPluginPersist);
createApp(App).use(pinia).use(router).mount('#app');
