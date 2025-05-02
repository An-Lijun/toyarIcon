import { defineConfig } from 'vite'
import terser from '@rollup/plugin-terser';
import vue from '@vitejs/plugin-vue'
import { join } from "path";
import styleInject from 'vite-plugin-style-inject';
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    
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
      plugins: [
        terser({
            compress: {
                drop_console: true,
                drop_debugger: true
            },
            mangle: true,
            format: {
                comments: true,
                 // 不保留换行符
                beautify: false 
            }
        })
    ]
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
  plugins: [vue(),styleInject()]

})
