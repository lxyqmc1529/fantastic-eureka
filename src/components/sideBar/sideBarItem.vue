<template>
  <li style="margin: 5px 0;">
    <span style="font-weight: bold;">{{ olderItem.name }}</span>
    <ul style="list-style-type: none; padding-left: 20px;">
      <sideBarItem v-for="child in olderItem.children" :key="child.name" :item="child" />
    </ul>
  </li>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
defineOptions({
  name: 'sideBarItem'
})
const props = defineProps({
  olderItem: {
    type: Object,
    required: true
  }
});
const emits = defineEmits(['click']);
</script>

<style>
/* Add any additional styles here */
</style>
