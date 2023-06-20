<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900 text-3xl">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <RouterLink
        :to="{ name: 'home' }"
        class="self-center text-3xl font-semibold whitespace-nowrap hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >BookIt</RouterLink
      >

      <div class="hidden w-full md:block md:w-auto">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li v-if="hasToken">
            <RouterLink
              :to="{ name: 'my-bookings' }"
              class="block py-2 pl-3 pr-4 text-blue-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >My Bookings</RouterLink
            >
          </li>

          <li v-if="!hasToken">
            <RouterLink
              :to="{ name: 'signin' }"
              class="block py-2 pl-3 pr-4 text-blue-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Sign In</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/AuthStore';
import { storeToRefs } from 'pinia';


const authStore = useAuthStore();
const { hasToken } = storeToRefs(authStore);

</script>

<style scoped></style>
