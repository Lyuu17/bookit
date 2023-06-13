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
          <h1 class="text-white text-3xl mb-3">Welcome traveler</h1>
          <div>
            <p class="text-white font-medium">
              Explore new horizons, immerse yourself in fascinating cultures, and create
              stories to tell. Sign up and embark on your journey into the unknown.
              <a href="#" class="text-green-300 font-semibold">Learn more</a>
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
                class="border-gray-400 py-1 px-2 border-none"
              />
              <input
                type="text"
                placeholder="Lastname"
                class="border-gray-400 py-1 px-2 border-none"
              />
            </div>
            <div class="mt-5">
              <input
                type="text"
                placeholder="Birthdate (YYYY-mm-dd)"
                class="border-gray-400 py-1 px-2 w-full border-none"
              />
            </div>
            <div class="mt-5">
              <input
                type="text"
                placeholder="Email"
                class="border border-gray-400 py-1 px-2 w-full border-none"
              />
            </div>
            <div class="mt-5">
              <input
                type="password"
                placeholder="Password"
                class="border-gray-400 py-1 px-2 w-full border-none"
              />
            </div>
            <div class="mt-5">
              <input
                type="submit"
                class="w-full bg-green-300 py-3 text-center text-white cursor-pointer"
                value="Register Now"
              />
            </div>
            <div class="mt-3 text-center">
              <p>
                Already have an account?
                <router-link to="/signin" class="text-green-300 font-semibold"
                  >Log in</router-link
                >
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
