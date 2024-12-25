import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { viteMockServe } from 'vite-plugin-mock';
import path from 'path';

// const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
import monacoEditorPlugin from 'vite-plugin-monaco-editor';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    viteMockServe({
      mockPath: 'src/mock/', // 指向mock文件夹的路径
      enable: true, // 是否启用mock
    }),
    monacoEditorPlugin({
      languageWorkers: ['editorWorkerService', 'css', 'html', 'typescript'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
