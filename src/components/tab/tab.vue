<template>
  <t-space>
    <t-tabs v-model="value" theme="card" drag-sort class="t-tabs-card" @change="handleChooseTab">
      <t-tab-panel class="t-tabs-card__item"
        v-for="data in panelData"
        :key="data.value"
        :value="data.value"
        :draggable="true"
        :label="data.label"
        :removable="data.removable"
      >
      </t-tab-panel>
    </t-tabs>
  </t-space>
</template>

<script lang="ts" setup>
import { ref,defineEmits,defineProps } from 'vue';
import { TabsProps } from 'tdesign-vue-next';
import { useChoseFileStore} from '@/stores/choseFile'
const props = defineProps({
  panelData: {
    type: Array,
    default: () => [],
  },
})
let id = 0;
const value = ref('first');
const emit = defineEmits(['chooseTab']);
const handleChooseTab = (val: string) => {
  emit('chooseTab', val);
};
const panelData = ref([
  {
    value: 'first',
    label: '原有选项卡1',
    removable: true,
    content: '原有选项卡1内容',

  },
  {
    value: 'second',
    label: '原有选项卡2',
    removable: true,
    content: '原有选项卡2内容',
  },{
    value: 'third',
    label: '原有选项卡3',
    removable: true,
    content: '原有选项卡3内容',
  },
]);
// const addTab: TabsProps['onAdd'] = () => {
//   panelData.value.push({
//     value: `${id}`,
//     label: `新选项卡${id}`,
//     removable: true,
//     content: '新选项卡内容',
//   });
//   value.value = `${id}`;
//   id += 1;
// };
// const removeTab: TabsProps['onRemove'] = ({ value: val, index }) => {
//   if (index < 0) return false;
//   panelData.value.splice(index, 1);
//   if (panelData.value.length === 0) return;
//   if (value.value === val) {
//     value.value = panelData.value[Math.max(index - 1, 0)].value;
//   }
// };
</script>
<style>
.t-tabs-card::v-deep {
  background-color: inherit;
  width: 100%;
  height:30px;
  margin: 0;
}
.t-tabs-card__item::v-deep {
  background-color: inherit;
  width: 100%;
  height:24px;
  margin: 0;
}
</style>
