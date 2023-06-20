<template>
  <div
    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-700"
  >
    <a href="#">
      <img class="rounded-t-lg" :src="imageUrl" alt="" />
    </a>
    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-grey">
          {{ room.name }}
        </h5>
      </a>
      <div class="text-start">
        <ul
          v-for="amenity in room.amenities"
          class="mb-3 font-normal list-disc list-inside text-gray-700 dark:text-gray-500"
        >
          <li>{{ amenity.name }}</li>
        </ul>
      </div>
      <hr class="border-b border-gray-500 border-opacity-50" />
      <div>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-grey">
          Bed groups
        </h5>
        <div class="text-start">
          <ul
            v-for="beds in room.bed_groups"
            class="mb-3 font-normal list-disc list-inside text-gray-700 dark:text-gray-500"
          >
            <li>
              {{ beds.description }}
              <ul>
                <li v-for="details in room.bed_groups.configuration" :key="details.type">
                  {{ details.type }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <a
        href="#"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Booking
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    room: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const imageUrls = [
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3144580/pexels-photo-3144580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6480198/pexels-photo-6480198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];

    const imageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

    return {
      imageUrl,
    };
  },
});
</script>

<style scoped></style>
