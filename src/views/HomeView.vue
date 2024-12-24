<template>
  <div class="container">
    <div class="home-sidebar-container">
      <sideBar />
    </div>
    <div class="home-editor-container">
      <div class="editor-container" ref="editorContainer"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, defineOptions, defineEmits, defineProps, withDefaults } from 'vue';
import * as monaco from 'monaco-editor';
import sideBar from '@/components/sideBar/sideBar.vue';
const editorContainer = ref();
defineOptions({
  name: 'home',
});
const props = withDefaults(defineProps<{
  value: string;
  language: string;
  automaticLayout: boolean;
}>(), {
  automaticLayout: true,
  value: '',
  language: 'javascript',
});

const emit = defineEmits(['update:value']);

onMounted(() => {
  const editor = monaco.editor.create(editorContainer.value, {
    value: props.value,
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true,
  });
  editor.onDidChangeModelContent(() => {
    emit('update:value', editor.getValue());
  });
});

</script>

<style lang="less" scoped>
.container {
  display: flex;
  height: 100vh;
}

.home-sidebar-container {
  flex: 0.1;
  border: solid 1px #ccc;
  height: 100vh;
}

.home-editor-container {
  flex: 0.9;
  height: 100vh;
}

.editor-container {
  height: 100vh;
}
</style>
