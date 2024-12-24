<template>
  <div class="nav-bar">
    <div :style="containerStyle">
      <h2 :style="titleStyle">资源管理器</h2>
      <!-- 这个组件传了一个数组进来，进行遍历 -->
      <folder v-for="(folder, index) in fileStructure" :key="index" :value="folder"></folder>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import folder from '@/components/folder/folder.vue'

const containerStyle = "width: 250px; background-color: #1e1e1e; color: white; height: 100vh; padding: 10px;";
const titleStyle = "font-size: 1em; margin-top: 10px;";
const fileStructure = [{
  name: "EDITPRO",
  type: "folder",
  fileList: [
    {
      name: ".vscode",
      type: 'file',
    },
    {
      name: "node_modules",
      type: "folder",
      fileList: [
        {
          name: "vue-router",
          type: 'file',
        },
        {
          name: "vuex",
          type: 'folder',
          fileList: [
            {
              name: "dist",
              type: 'file',
            }]
        }
      ]
    }]
}
]

</script>
<style scoped lang="less">
.nav-bar {
  width: 100%;
}
</style>
