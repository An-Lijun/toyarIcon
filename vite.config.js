import { defineConfig } from 'vite'
import terser from '@rollup/plugin-terser'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
import styleInject from 'vite-plugin-style-inject'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/package/index.js',
      name: 'toyarIcon',
      formats: ['es'],
      fileName: () => 'index.js'
    },
    clearScreen: true,
    rollupOptions: {
      external: ['vue'],
      input: {
        main: join(__dirname, 'src/package/index.js')
      },
      output: {
        inlineDynamicImports: false,
        chunkFileNames: 'js/[name]-[hash].js',
        format: 'es',
        globals: {
          vue: 'Vue'
        },
        entryFileNames: 'index.js',
        dir: 'dist',
        exports: 'named'
      },
      plugins: [
        terser({
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log']
          },
          mangle: true,
          format: {
            comments: false
          }
        })
      ]
    },
    minify: 'terser',
    sourcemap: false,
    target: 'es2015'
  },
  css: {
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    },
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  resolve: {
    alias: {
      '@': join(__dirname, 'src')
    }
  },
  plugins: [vue(), styleInject()]
})
