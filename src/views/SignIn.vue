<template>
  <div
    class="min-h-screen py-40"
    style="background-image: linear-gradient(115deg, #d3fdc9, #fdf3c9, #d3fdc9)"
  >
    <div class="container mx-auto">
      <div
        class="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden"
      >
        <div
          class="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
          style="background-image: url('src/assets/imgs/Register-Background.jpg')"
        >
          <h1 class="text-white text-3xl mb-3">Hello again, traveler!</h1>
          <div>
            <p class="text-white">
              We missed you! At BooKit, we always have something special reserved for you.
              Log in and get ready for new adventures and discoveries!
            </p>
          </div>
        </div>
        <div class="w-full lg:w-1/2 py-16 px-12">
          <h2 class="text-3xl mb-4">Sign In</h2>
          <p class="mb-4">Please sign in to continue.</p>
          <form action="#">
            <div class="mt-5">
              <input
                type="text"
                placeholder="Email"
                class="bg-slate-100 py-1 px-2 w-full border-none"
                v-model="email_address"
              />
            </div>
            <div class="mt-5">
              <input
                type="password"
                placeholder="Password"
                class="bg-slate-100 py-1 px-2 w-full border-none"
                v-model="password"
              />
            </div>
            <div class="mt-5">
              <input
                type="submit"
                class="w-full bg-green-300 py-3 text-center text-white cursor-pointer"
                value="Sign In"
                @click="login"
              />
            </div>
          </form>
          <div class="mt-3 text-center">
            <p>
              Don’t have an account yet?
              <router-link to="/" class="text-green-300 font-semibold"
                >SignUp</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    // Variables reactivas con ref
    const email_address = ref("");
    const password = ref("");

    // Otros métodos y opciones del componente aquí

    return {
      email_address,
      password,
    };
  },
};
</script>

<style scoped></style>
