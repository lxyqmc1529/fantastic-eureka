<template>
  <!-- 传过来的应该是一个单独的项，这个项有可能是file，也有可能是folder，如果是file渲染FileItem，如果是folder渲染Collapse -->
  <t-space direction="vertical" class="folder">
    <component :is="value.type == 'file' ? FileItem : FolderItem" :value="value">
    </component>
  </t-space>
</template>
<script lang="ts" setup>
import { ref, defineOptions, defineProps } from 'vue';
import { TagInputProps, CollapseProps } from 'tdesign-vue-next';
import FileItem from './fileItem.vue';
import FolderItem from './FolderItem.vue';
defineOptions({
  name: 'Folder',
});

const props = defineProps({
  value: {
    type: Object,
    required: true,
    default: () => ({
      name: '',
      type: 'folder',
      fileList: []
    })
  }
})
const currentItem = ref<number[]>([1]);
const collapseClass = ref('accordion-demo');
const tags1 = ref(['Vue', 'React']);
const tags2 = ref<TagInputProps['value']>(['Vue', 'React']);
const tags3 = ref<TagInputProps['defaultValue']>(['Vue', 'React']);

const handlePanelChange: CollapseProps['onChange'] = (val) => {
  currentItem.value = val.map((n) => Number(n));
};
const onTagInputEnter: TagInputProps['onEnter'] = (val, context) => {
  console.log(val, context);
};
const onChange: TagInputProps['onChange'] = (val, context) => {
  console.log(val, context);
  tags2.value = val;
};
const onPaste: TagInputProps['onPaste'] = (context) => {
  console.log(context);
};
</script>
<style lang="less" scoped>
.folder {
  background-color: rgb(30, 30, 30);
  color: azure;
}
.folder > * {
  background-color: inherit;
}
</style>
