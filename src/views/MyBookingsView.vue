<template>
  <div class="bg-blue-100">
    <section class="bg-gray-100 text-white text-center">
      <div class="relative w-screen h-96">
        <img
          src="https://images.pexels.com/photos/16253102/pexels-photo-16253102/free-photo-of-escaleras-hotel-ventanas-puerta.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Booking image"
          class="w-full h-full border-5 object-cover backdrop-filter backdrop-blur-sm brightness-75"
        />
        <div
          class="absolute inset-0 flex flex-col items-center justify-center text-white"
        >
          <h2 class="text-5xl font-normal">
            My Bookings
          </h2>
        </div>
      </div>
    </section>
    <section class="py-5">
      <h1 v-if="itineraries.length == 0" class="text-center text-4xl">No bookings found</h1>

      <CardBooking v-for="itinerary, id in itineraries" :key="id" :itinerary="itinerary" />
    </section>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onBeforeMount, ref } from "vue";

import { useAuthStore } from '@/stores/AuthStore';

import CardBooking from "@/components/CardBooking.vue";
import { storeToRefs } from "pinia";

const itineraries = ref<any[]>([]);
const authStore = useAuthStore();
const { token } = storeToRefs(authStore);

onBeforeMount(async () => {
  try {
    const { data } = await axios.get(`/api/v1/itineraries`, {
      headers: { 'Authorization': `Bearer ${token.value}` }
    });

    data.forEach(async (itineraryData: any) => {
      const { data } = await axios.get(`/api/v1/properties/${itineraryData.property}`);

      itineraries.value.push({
        name: data.name,
        ...itineraryData
      });
    });
  }
  catch (e: any) { }
})
</script>

<style scoped></style>
