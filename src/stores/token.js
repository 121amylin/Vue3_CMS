import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTokenStore = defineStore('tokener', () => {
  const token = ref(localStorage.getItem('token') || '')

  return { token }
})
