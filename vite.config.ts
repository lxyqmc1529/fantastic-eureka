import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'


// const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
import monacoEditorPlugin from 'vite-plugin-monaco-editor';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
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
