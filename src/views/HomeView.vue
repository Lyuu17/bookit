<script setup>
import Home from "../components/Home.vue";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import Card from "../components/Card.vue";
</script>

<template>
  <header>
    <NavBar></NavBar>
  </header>
  <main>
    <Home />
    <Card />
  </main>
  <Footer id="footer"></Footer>
</template>
