<template>
  <section class="py-5 bg-indigo-200 text-white text-center">
    <div class="container mx-auto flex items-center">
      <div class="w-full">
        <h2 class="text-4xl font-nunito text-black">{{ hotel.name }}</h2>
      </div>
    </div>
  </section>
  <section class="bg-gray-100 py-5">
    <div class="container mx-auto grid grid-cols-2 gap-4">
      <div class="mt-8 flex flex-col items-center border-r-4">
        <h2 class="text-2xl font-bold">Contact Details</h2>
        <p class="text-lg">
          Address: {{ hotel.address.street }}, {{ hotel.address.country }}
        </p>
        <p class="text-lg">Postal code: {{ hotel.address.postal_code }}</p>
        <p class="text-lg">Telephone: {{ hotel.phone }}</p>
      </div>
      <div class="mt-8 flex flex-col items-center">
        <h2 class="text-2xl font-bold">Servicios</h2>
        <ul>
          <li v-for="hotelItem in hotel.amenities" class="text-center">
            {{ hotelItem.name }}
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section>
    <div class="mt-8 text-center">
      <h2 class="text-2xl font-bold">Check-in</h2>
      <p class="text-lg">
        Horario de Check-in: {{ hotel.checkin.begin_time }} - {{ hotel.checkin.end_time }}
      </p>
      <p class="text-lg">Minimun age: {{ hotel.checkin.min_age }}</p>
    </div>
  </section>
  <section>
    <p class="text-lg">
      Instrucciones para el Check-in: {{ hotel.checkin.instructions }}
    </p>
  </section>
  <Testimonies />
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import Testimonies from "../components/Testimonies.vue";

export default defineComponent({
  components: {
    Testimonies,
  },
  computed: {
    hotel() {
      const hotel = this.$route.query.hotel;
      if (hotel) {
        return JSON.parse(hotel);
      }
      return null;
    },
  },
});
</script>
