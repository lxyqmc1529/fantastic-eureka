<template>
  <div class="collapse-container">
    <!-- 这里处理的是一个对象，所以需要一个collapse，和多个panel -->
    <t-collapse :borderless="true" :default-value="[1]" class="custom-collapse">
      <t-collapse-panel :header=value.name>
        <folder v-for="(item, index) in value.fileList" :key="index" :value="item" />
      </t-collapse-panel>
    </t-collapse>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps, onBeforeMount, defineAsyncComponent } from 'vue';
defineOptions({
  name: 'FolderItem'
})
const props = defineProps({
  value: {
    type: Object,
    default: ''
  }
})
console.log(props.value, '----');
//动态导入组件,处理循环引用、最大栈溢出问题
const Folder = defineAsyncComponent(() => import('@/components/folder/folder.vue'));

const components = ref({
  Folder: null as any
});

onBeforeMount(async () => {
  components.value.Folder = Folder;
});
</script>
<style scoped></style>
