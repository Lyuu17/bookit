<template>
  <section class="font-nunito relative">
    <div class="min-h-screen flex items-center justify-center relative">
      <!-- Video por defecto -->
      <div class="absolute top-0 left-0 z-1 h-full w-full">
        <img
          src="../assets/imgs/header-bg.jpg"
          class="absolute top-0 left-0 h-full w-full object-cover"
        />
      </div>

      <div
        class="content absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center z-10"
      >
        <h3 class="text-white text-7xl uppercase text-shadow">go, find, explore</h3>
        <p class="text-white text-4xl py-2">the essence of true discovery</p>

        <div
          class="absolute formulario content bottom-1/4 text-2xl bg-backgroundForm p-10 z-100 rounded-md"
        >
          <form action="" class="form-horizontal flex space-x-5">
            <div class="relative">
              <AutocompleteInput />
            </div>
            <input
              type="date"
              class="form-control bottom-0 left-0 z-10 max-h-48 overflow-y-auto bg-white border border-gray-300 rounded-md p-2"
              placeholder="Check-in"
            />
            <input
              type="date"
              class="form-control bottom-0 left-0 z-10 max-h-48 overflow-y-auto bg-white border border-gray-300 rounded-md p-2"
              placeholder="Check-out"
            />
            <input type="submit" class="btn cursor-pointer" value="Search" />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts" type="module">
import AutocompleteInput from "./AutocompleteInput.vue";
</script>

<style scoped></style>
