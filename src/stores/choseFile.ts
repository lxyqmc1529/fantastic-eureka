import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useChoseFileStore = defineStore('fileTab', () => {
  const fileId = ref('')

  return { fileId  }
})


