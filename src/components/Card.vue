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
        <div>
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
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
