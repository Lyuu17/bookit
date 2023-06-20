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
          <h2 class="text-3xl font-light">
            You are one step away from experiencing an incredible adventure.
          </h2>
          <h2 class="text-3xl font-normal">Are you ready?</h2>
        </div>
      </div>
    </section>
    <section class="py-5">
      <CardBooking />
    </section>
  </div>
</template>

<script setup lang="ts">
import CardBooking from "@/components/CardBooking.vue";
</script>

<style scoped></style>
