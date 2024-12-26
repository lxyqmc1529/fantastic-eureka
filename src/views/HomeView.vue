<template>
  <div class="container">
    <div class="home-sidebar-container">
      <sideBar />
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
import { onMounted, ref, defineEmits, watch, useAttrs, onUnmounted } from 'vue';
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
  tabStore.selectedTab = tabData;
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

onUnmounted(() => {
  editor?.dispose();
});
// 监听组件卸载时销毁编辑器

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
