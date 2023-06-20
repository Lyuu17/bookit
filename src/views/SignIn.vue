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
                type="button"
                class="w-full bg-green-300 py-3 text-center text-white cursor-pointer"
                value="Sign In"
                @click="login"
              />
            </div>
          </form>
          <div class="mt-3 text-center">
            <p>
              Don’t have an account yet?
              <RouterLink to="/" class="text-green-300 font-semibold">SignUp</RouterLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

const email_address = ref("");
const password = ref("");

const router = useRouter();

const login = async () => {
  const data = {
    email: email_address.value,
    password: password.value,
  };

  try {
    const response = await axios.post("/api/v1/auth/login", data);
    console.log(response.data);
    router.push({ name: "home" });
    alert(`Bienvenid@ de nuevo!`);
  } catch (e: any) {
    if (e.response.status === 401) {
      alert(e.response.data.message);
    }
  }
};
</script>

<style scoped></style>
