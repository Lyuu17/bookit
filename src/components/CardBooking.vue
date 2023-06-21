<template>
  <div class="max-w-md m-2 bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 text-center">{{ itinerary.name }}</div>
      <div class="mb-2">
        <span class="font-semibold">Check-in:</span> {{ itinerary.checkin }}
      </div>
      <div class="mb-2">
        <span class="font-semibold">Check-out:</span> {{ itinerary.checkout }}
      </div>
      <div class="mb-2">
        <span class="font-semibold">Adults:</span> {{ itinerary.num_adults }}
      </div>
      <div class="mb-2">
        <span class="font-semibold">Children:</span> {{ itinerary.num_children }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  itinerary: {
    type: Object,
    required: true
  }
})

</script>

<style scoped></style>
