<template>
  <div
    class="w-full inline-block min-w bg-white border border-gray-200 m-5 rounded-lg shadow-xl"
  >
    <div class="p-5 pb-5">
      <h5 class="text-xl font-semibold tracking-tight text-gray-900">
        {{ hotel.name }}
      </h5>
      <h6 class="text-xl font-light tracking-tight text-gray">
        {{ hotel.address.street }}
      </h6>
      <div class="flex items-center mt-2.5 mb-5">
        <div class="flex flex-row">
          <HotelStarSvg v-for="star of [0, 1, 2, 3, 4]" />
        </div>

        <span
          class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
          >5</span
        >
      </div>
      <div class="flex items-center justify-between">
        <input
          type="button"
          class="text-white focus:ring-4 bg-green-500 py-2 focus:outline-none font-medium rounded-lg text-base px-5 text-center"
          value="Book it"
          @click="booking"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import HotelStarSvg from "@/components/HotelStarSvg.vue";

const props = defineProps({
  hotel: {
    type: Object,
    required: true,
  },
});

const router = useRouter();
const booking = () => {
  const { id } = props.hotel;
  router.push({
    name: "hotel",
    params: { id: id },
  });
};
</script>

<style scoped></style>
