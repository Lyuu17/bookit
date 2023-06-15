<template>
  <div
    class="min-h-screen py-40"
    style="background-image: linear-gradient(115deg, #d3fdc9, #fceeb0, #d3fdc9)"
  >
    <div class="container mx-auto">
      <div
        class="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden"
      >
        <div
          class="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
          style="background-image: url('src/assets/imgs/Register-Background.jpg')"
        >
          <h1 class="text-white text-3xl mb-3">Welcome traveler</h1>
          <div>
            <p class="text-white font-medium">
              Explore new horizons, immerse yourself in fascinating cultures, and create
              stories to tell. Sign up and embark on your journey into the unknown.
            </p>
          </div>
        </div>
        <div class="w-full lg:w-1/2 py-16 px-12">
          <h2 class="text-3xl mb-4">Register</h2>
          <p class="mb-4">Create your account.</p>
          <form action="#">
            <div class="grid grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Firstname"
                class="bg-slate-100 py-1 px-2 border-none"
                v-model="first_name"
              />
              <input
                type="text"
                placeholder="Lastname"
                class="bg-slate-100 py-1 px-2 border-none"
                v-model="last_name"
              />
            </div>
            <div class="mt-5">
              <input
                type="date"
                placeholder="Birthdate (YYYY-mm-dd)"
                class="bg-slate-100 py-1 px-2 w-full border-none"
                v-model="birthdate"
              />
            </div>
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
                value="Register Now"
                @click="register"
              />
            </div>
            <div class="mt-3 text-center">
              <p>
                Already have an account?
                <RouterLink to="/signin" class="text-green-300 font-semibold"
                  >Log in</RouterLink
                >
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const first_name = ref("");
const last_name = ref("");
const birthdate = ref("");
const email_address = ref("");
const password = ref("");

const router = useRouter();

const register = async () => {
  try {
    const response = await axios.post("/api/v1/auth/register", {
      email: email_address.value,
      password: password.value,
      firstName: first_name.value,
      lastName: last_name.value,
      birthdate: new Date(birthdate.value).toISOString().split("T")[0],
    });
    alert("Usuario creado con éxito");
    router.push({ name: "home" });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
</script>

<style></style>
