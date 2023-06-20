<template>
  <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ hotelName }} Hotel name</div>
      <div class="mb-2">
        <span class="font-semibold"
          >Check-in:
          <p class="font-normal">{{ checkinDate }} checkin</p></span
        >
      </div>
      <div class="mb-2">
        <span class="font-semibold">Check-out:</span> {{ checkoutDate }}
      </div>
      <div class="mb-2">
        <span class="font-semibold">Número de adultos:</span> {{ numberOfAdults }}
      </div>
      <div class="mb-2">
        <span class="font-semibold">Número de niños:</span> {{ numberOfChildren }}
      </div>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style scoped></style>
