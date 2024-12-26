<template>
  <div class="container">
    <div class="home-sidebar-container" ref="sidebarContainer">
      <sideBar />
      <div class="handle" @mousedown="startDrag"></div>
    </div>
    <div class="home-editor-container">
      <div class="tab-container">
        <tab  @chooseTab="handleTabToEditor" />
      </div>
      <div class="editor-container" ref="editorContainer"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, defineEmits, onUnmounted } from 'vue';
import * as monaco from 'monaco-editor';
import sideBar from '@/components/sideBar/sideBar.vue';
import tab from '@/components/tab/tab.vue';
import{ useChoseFileStore } from '@/stores/ChoseFile';

// 写死的tab数据
const tabs = [
  { name: 'Welcome', value: 'console.log("Welcome to the editor!");', language: 'javascript' },
  { name: 'Settings', value: '{}', language: 'json' },
  // 其他tab...
];

const editorContainer = ref();
const originData = {
  value: 'come to the editor!',
  language: 'javascript',
  theme: 'vs-dark',
    automaticLayout: true,
}
let editor: monaco.editor.IStandaloneCodeEditor | null = null ;
const emit = defineEmits(['update:value']);

const handleTabToEditor = (tabData:string) => {
  // 销毁旧的编辑器实例
  if (editor) {
    editor.dispose();
  }
  // 创建新的编辑器实例
  editor = monaco.editor.create(editorContainer.value, {
    value: tabData,
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true,
  });
  tabStore.setSelectedTab(tabData);
  // 监听编辑器内容变化并emit
  editor.onDidChangeModelContent(() => {
    emit('update:value', editor?.getValue());
  });
};
const tabStore = useChoseFileStore();
onMounted(() => {
  // 初始化编辑器
  handleTabToEditor('welcome to the editor!');
});
// 注册补全建议
monaco.languages.registerCompletionItemProvider('javascript', {
  provideCompletionItems: (model, position) => {
    // 获取当前单词
    const word = model.getWordUntilPosition(position);
    const range = {
      startLineNumber: position.lineNumber,
      endLineNumber: position.lineNumber,
      startColumn: position.column - word.length,
      endColumn: position.column
    };

    // 返回补全建议
    return {
      suggestions: [
        {
          label: word,
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: word,
          range: range
        },
        // ...其他补全建议
      ]
    };
  }
});
const sidebarContainer = ref(null);
const isDragging = ref(false);

const startDrag = (event) => {
  isDragging.value = true;
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', endDrag);
};

const drag = (event) => {
  if (isDragging.value) {
    const container = sidebarContainer.value;
    const newWidth = event.clientX - container.getBoundingClientRect().left;
    container.style.width = `${newWidth}px`;
  }
};

const endDrag = () => {
  isDragging.value = false;
  document.removeEventListener('mousemove', drag);
  document.removeEventListener('mouseup', endDrag);
};

onUnmounted(() => {
  editor?.dispose();
  document.removeEventListener('mousemove', drag);
  document.removeEventListener('mouseup', endDrag);
});
// 监听组件卸载时销毁编辑器

</script>

<style lang="less" scoped>
.container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.home-sidebar-container {
  width: 18%;
  flex: 0 0 0.1; /* 修改这里 */
  border: solid 1px #ccc;
  height: 100%;
  position: relative;
  transition: width 0.1s; /* 添加过渡效果 */
}

.home-editor-container {
  flex: 1;
  overflow: hidden;
  height: 100%;
}

.editor-container {
  height: 100%;
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
