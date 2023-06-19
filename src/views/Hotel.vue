<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img class="w-full h-64 object-cover" :src="hotel.image" :alt="hotel.name" />

      <div class="px-6 py-4">
        <h2 class="text-xl font-bold mb-2">{{ hotel.name }}</h2>
        <p class="text-gray-700 text-base">{{ hotel.description }}</p>
      </div>

      <div class="px-6 py-4">
        <h4 class="text-lg font-semibold mb-2">Facilities</h4>
        <ul class="flex flex-wrap">
          <li v-for="facility in hotel.facilities" :key="facility" class="mr-2 mb-2">
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
              >{{ facility }}</span
            >
          </li>
        </ul>
      </div>

      <div class="px-6 py-4">
        <h4 class="text-lg font-semibold mb-2">Amenities</h4>
        <ul class="flex flex-wrap">
          <li v-for="amenity in hotel.amenities" :key="amenity" class="mr-2 mb-2">
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
              >{{ amenity }}</span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
  <Testimonies />
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
