import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { viteMockServe } from 'vite-plugin-mock';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    drop: ['console', 'debugger'], // 删除 所有的console 和 debugger
  },
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定要缓存的文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: '[name]',
    }),
    viteMockServe({
      mockPath: 'mock',
      localEnabled: true,
    }),
    visualizer({
      gzipSize: true,
      brotliSize: true,
      emitFile: false,
      open: true, // 如果存在本地服务端口，将在打包后自动展示
    }),
    viteCompression({
      // options
      verbose: true, // 是否在控制台输出压缩结果
      disable: false, // 是否禁用
      threshold: 1024 * 10, // 压缩的门槛大小
      algorithm: 'gzip', // 压缩的算法
      ext: '.gz', // 压缩后的文件扩展名
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3002,
    host: 'localhost',
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '/src/style/variables.scss';`, // 引入全局变量文件
      },
    },
  },
});
