<template>
  <header>
    <Principal></Principal>
  </header>
  <body>
  <router-view></router-view>
  </body>
  
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue';
import Principal from './components/Principal.vue';


</script>

<style scoped>

</style>
