<template>
  <div class="nav-bar">
    <div :style="containerStyle">
      <h2 style="font-size:1em;margin: 0;">资源管理器</h2>
      <div class="handle"></div>
      <!-- 这个组件传了一个数组进来，进行遍历 -->
      <folder v-for="(folder, index) in fileStructure" :key="index" :value="folder"></folder>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import folder from '@/components/folder/folder.vue'

const containerStyle = "width: 100%; background-color: #1e1e1e; color: white; height: 100vh;";
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
  position: absolute;
  top: 0;
  bottom: 0;

}
.handle {
  width: 3px;
  height: 100%;
  background-color: #ddd;
  position: absolute;
  right: 0;
  top: 0;
  cursor: col-resize;
}
</style>
