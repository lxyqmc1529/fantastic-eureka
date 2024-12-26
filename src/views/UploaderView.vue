<!-- MyUpload.vue -->
<template>
  <div class="uploader">
    <input type="file" @change="handleFileChange" webkitdirectory directory multiple />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const fileList = ref([])

const handleFileChange = (event: any) => {
  const files = event.target.files
  for (let i = 0; i < files.length; i++) {
    fileList.value.push(files[i])
  }
}
</script>
