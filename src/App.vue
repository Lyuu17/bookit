<template>
  <header>
    <NavBar></NavBar>
    <Home></Home>
  </header>
  <body>
    <router-view></router-view>
  </body>
  <Footer></Footer>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Home from "./components/Home.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import Carousel from "./components/Carousel.vue";
</script>

<style scoped></style>
