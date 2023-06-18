<template>
  <section class="brands">
    <div class="w-full overflow-hidden">
      <h1
        class="text-center py-7 text-4xl font-bold bg-gradient-to-r from-green-700 to-green-300 bg-clip-text text-transparent bg-green-700 transition-all duration-10000"
      >
        Our Collaborators
      </h1>
      <div class="flex">
        <img
          src="../assets/imgs/1.png"
          alt=""
          class="w-1/6 h-auto object-cover transition-opacity duration-15000"
          :style="{ opacity: currentIndex % 2 === 0 ? 1 : 0 }"
        />
        <img
          src="../assets/imgs/2.jpg"
          alt=""
          class="w-1/6 h-auto object-cover transition-opacity duration-15000"
          :style="{ opacity: currentIndex % 2 !== 0 ? 1 : 0 }"
        />
        <img
          src="../assets/imgs/3.jpg"
          alt=""
          class="w-1/6 h-auto object-cover transition-opacity duration-15000"
          :style="{ opacity: currentIndex % 2 === 0 ? 1 : 0 }"
        />
        <img
          src="../assets/imgs/4.jpg"
          alt=""
          class="w-1/6 h-auto object-cover transition-opacity duration-15000"
          :style="{ opacity: currentIndex % 2 !== 0 ? 1 : 0 }"
        />
        <img
          src="../assets/imgs/5.png"
          alt=""
          class="w-1/6 h-auto object-cover transition-opacity duration-15000"
          :style="{ opacity: currentIndex % 2 === 0 ? 1 : 0 }"
        />
        <img
          src="../assets/imgs/6.png"
          alt=""
          class="w-1/6 h-auto object-cover transition-opacity duration-15000"
          :style="{ opacity: currentIndex % 2 !== 0 ? 1 : 0 }"
        />
        <img
          src="../assets/imgs/7.jpg"
          alt=""
          class="w-1/6 h-auto object-cover transition-opacity duration-15000"
          :style="{ opacity: currentIndex % 2 === 0 ? 1 : 0 }"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.currentIndex += 1;
    }, 2500);
  },
};
</script>
