import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${process.cwd()}/src/`
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  server: {  
    proxy: {  
      '/api': {  
        target: 'http://localhost:3000/', // 代理目标地址  
        changeOrigin: true, // 允许跨域  
        rewrite: (path) => path.replace(/^\/api/, '') // 重写路径，去掉前缀  
      },  
    },  
  },  
  
})
