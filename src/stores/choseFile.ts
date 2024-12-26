import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useChoseFileStore = defineStore('fileTab', {
  state:() => ({
    selectedTab:null as string | null,
  }),
  actions: {
    setSelectedTab(tab: string | null) {
      this.selectedTab = tab
    },
  },
})


