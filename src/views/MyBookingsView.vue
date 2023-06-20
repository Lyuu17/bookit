<template>
  <div>hola mundo</div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from "vue";
import { useStore } from "pinia";
import axios from "axios";

export default defineComponent({
  setup() {
    const store = useStore();
    const token = store.responseData;

    onBeforeMount(() => {
      makeRequest(token);
    });

    async function makeRequest(token) {
      try {
        const headers = { Authorization: `Bearer ${token}` };
        const response = await axios.get("/api/v1/itineraries", { headers });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    return {
      makeRequest,
    };
  },
});
</script>

<style scoped></style>
