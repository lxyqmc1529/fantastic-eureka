<template>
  <div class="file-item">
    {{ value.name }}
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps({
  value: {
    type: Object,
    required: true,
  },
});
</script>
<style scoped>
.file-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #eee;
}
</style>

