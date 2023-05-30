<template>
  <section class="font-nunito relative">
    <div class="min-h-screen flex items-center justify-center relative">
      <!-- Video por defecto -->
      <div class="absolute top-0 left-0 z-1 h-full w-full">
        <img
          src="../imgs/header-bg.jpg"
          class="absolute top-0 left-0 h-full w-full object-cover"
        />
      </div>

      <div
        class="content absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center z-10"
      >
        <h3 class="text-white text-7xl uppercase text-shadow">go, find, explore</h3>
        <p class="text-white text-4xl py-2">the essence of true discovery</p>

        <div
          class="formulario content absolute bottom-1/4 text-2xl bg-backgroundForm p-5 z-100"
        >
          <h2></h2>
          <AutocompleteInput />
          <form action="" class="form-horizontal flex space-x-5">
            <input type="date" class="form-control" placeholder="Date" />
            <input type="number" class="form-control" placeholder="Price (€)" />
            <input type="submit" class="btn" value="Search" />
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
