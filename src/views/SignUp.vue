<template>
  <div
    class="min-h-screen py-40"
    style="background-image: linear-gradient(115deg, #65bdff, #fee2fe)"
  >
    <div class="container mx-auto">
      <div
        class="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden"
      >
        <div
          class="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
          style="background-image: url('src/assets/imgs/Register-Background.png')"
        >
          <h1 class="text-white text-3xl mb-3">Welcome</h1>
          <div>
            <p class="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse
              aliquam varius rutrum purus maecenas ac
              <a href="#" class="text-purple-500 font-semibold">Learn more</a>
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
                class="border border-gray-400 py-1 px-2"
              />
              <input
                type="text"
                placeholder="Lastname"
                class="border border-gray-400 py-1 px-2"
              />
            </div>
            <div class="mt-5">
              <input
                type="text"
                placeholder="Birthdate (YYYY-mm-dd)"
                class="border border-gray-400 py-1 px-2 w-full"
              />
            </div>
            <div class="mt-5">
              <input
                type="text"
                placeholder="Email"
                class="border border-gray-400 py-1 px-2 w-full"
              />
            </div>
            <div class="mt-5">
              <input
                type="password"
                placeholder="Password"
                class="border border-gray-400 py-1 px-2 w-full"
              />
            </div>
            <div class="mt-5">
              <input
                type="submit"
                class="w-full bg-purple-500 py-3 text-center text-white cursor-pointer"
                value="Register Now"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
