<script setup lang="ts">
import Footer from "../components/Footer.vue";
import Home from "../components/Home.vue";
import NavBar from "../components/NavBar.vue";
</script>

<template>
  <header>
    <NavBar></NavBar>
  </header>
  <main>
    <Home />
  </main>
  <Footer id="footer"></Footer>
</template>
