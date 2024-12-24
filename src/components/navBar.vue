<template>
  <div class="nav-bar">


    <t-head-menu v-model="menu2Value" theme="dark" height="120px">
      <template #logo>
        <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-dark.png" alt="logo" />
      </template>
      <t-menu-item value="item1"> 菜单1 </t-menu-item>
      <t-menu-item value="item2"> 菜单2 </t-menu-item>
      <t-menu-item value="item4" :disabled="true"> 禁用菜单 </t-menu-item>
      <template #operations>
        <div class="t-demo-menu--dark">
          <t-button variant="text" shape="square">
            <template #icon><t-icon name="search" /></template>
          </t-button>
          <t-button variant="text" shape="square">
            <template #icon><t-icon name="mail" /></template>
          </t-button>
          <t-button variant="text" shape="square">
            <template #icon><t-icon name="user" /></template>
          </t-button>
          <t-button variant="text" shape="square">
            <template #icon><t-icon name="ellipsis" /></template>
          </t-button>
        </div>
      </template>
    </t-head-menu>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { HeadMenuProps } from 'tdesign-vue-next';
const menu1Value = ref('item2');
const menu2Value = ref('item1');
const changeHandler: HeadMenuProps['onChange'] = (active) => {
  console.log('change', active);
};
</script>
<style scoped lang="less"></style>
