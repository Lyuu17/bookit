<template>
  <header>
    <NavBar></NavBar>
  </header>
  <body>
    <router-view></router-view>
    <Card />
  </body>
  <Footer id="footer"></Footer>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import Card from "./components/Card.vue";
</script>

<style scoped></style>
