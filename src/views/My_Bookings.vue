<template>
  <div>hola mundo</div>
</template>

<script lang="ts">
import { useStore } from "pinia";
import axios from "axios";

export default {
  beforeMount() {
    const store = useStore();
    this.makeRequest(store.setResponseData);
  },
  methods: {
    async makeRequest(setResponseData) {
      try {
        const headers = { Authorization: `Bearer ${setResponseData}` }; // auth header with bearer token
        const response = await axios.get("/api/v1/itineraries", { headers });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped></style>
