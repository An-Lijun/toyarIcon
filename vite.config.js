import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    //压缩
    minify: false,
    lib: {
      entry:  'src/package/index.js', // 设置入口文件
      name: 'toyarIcon', // 起个名字，安装、引入用
      formats: ['es'], // 默认['es', 'umd']
      fileName: (format) => `vite-lib.${format}.js` // 打包后的文件名
    },
    clearScreen: true,
    rollupOptions: {
      //忽略打包vue文件
      //input: ["index.ts"],
      external: ['vue'],
      input: {
        main: join(__dirname, 'src/package/index.js'),
      },
      output: {
        inlineDynamicImports:false,
        chunkFileNames: 'js/[name]-[hash].js',
        format: "es",
        globals: {
          vue: "Vue",
        },
        entryFileNames: "index.js",
        dir: "dist",
        exports: "named",
      },
    }
  },
  css: {
    modules: {
      // 自定义 hash 生成规则
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  resolve:{
    alias: {
      '@': join(__dirname, "src"),
    },
  },
  plugins: [vue()]

})
