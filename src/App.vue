<template>
  <header>
    <NavBar/>
  </header>
  <main>
    <RouterView></RouterView>
  </main>
  <Footer/>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";

import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
</script>

<style scoped></style>
