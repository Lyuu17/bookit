<template>
  <div
    tabindex="-1"
    class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex"
  >
    <div class="relative w-full max-w-2xl max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div
          class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Booking
          </h3>
        </div>

        <div class="p-6 space-y-6">
          <div class="flex items-center">
            <label for="checkin" class="pr-6 mr-2">Checkin</label>
            <input type="date" v-model="checkin" class="border p-1 rounded-lg" />
          </div>
          <div class="flex items-center">
            <label for="checkout" class="pr-3 mr-2">Checkout</label>
            <input type="date" v-model="checkout" class="border p-1 rounded-lg" />
          </div>
          <div class="flex items-center">
            <label for="adults" class="pr-8 mr-2">Adults</label>
            <input type="number" min="1" v-model="adults" class="border p-1 rounded-lg" />
          </div>
          <div class="flex items-center">
            <label for="children" class="pr-5 mr-2">Children</label>
            <input type="number" min="0" v-model="kids" class="border p-1 rounded-lg" />
          </div>
          <div>
            <label for="specialrequest" class="pr-3 mr-2 flex items-center">Special request</label>
            <textarea v-model="special_request" class="w-full border mt-1 rounded-lg"></textarea>
          </div>
        </div>

        <div
          class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
        >
          <button
            @click="book()"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Book
          </button>
          <button
            @click="emits('cancel')"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/AuthStore";
import axios from "axios";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const emits = defineEmits(['cancel']);
const props = defineProps({
  property: {
    type: String,
    required: true
  },
  room: {
    type: String,
    required: true
  }
})

const checkin = ref('');
const checkout = ref('');
const adults = ref(0);
const kids = ref(0);
const special_request = ref('');

const authStore = useAuthStore();
const { token } = storeToRefs(authStore);

const book = async () => {
  try {
    const { data } = await axios.post(`/api/v1/itineraries`, {
      property: props.property,
      bed_groups: [ props.room ],
      checkin: checkin.value,
      checkout: checkout.value,
      num_adults: adults.value,
      num_children: kids.value,
      special_request: special_request.value
    },
    {
      headers: { 'Authorization': `Bearer ${token.value}` }
    });

    emits('cancel');

    alert('Successful');
  }
  catch (e: any) {
    alert(e.response.data.message);
  }
}
</script>

<style scoped></style>
