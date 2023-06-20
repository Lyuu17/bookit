import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useAuthStore = defineStore('auth', {
  state: () => ({
    responseData: null,
  }),
  mutations: {
    setResponseData(response) {
      this.responseData = response;
    },
  },
});