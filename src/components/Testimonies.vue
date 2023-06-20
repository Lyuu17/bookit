<template>
  <div class="container my-24 mx-auto md:px-40">
    <!-- Section: Design Block -->
    <section class="mb-32 text-center">
      <h2 class="mb-12 pb-4 text-center text-3xl font-bold">Testimonials</h2>

      <div class="grid gap-6 md:grid-cols-3 xl:gap-x-12">
        <div class="mb-6 lg:mb-0">
          <div
            class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-blue-200"
          >
            <div class="flex">
              <div
                class="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg"
                  class="w-full"
                />
                <a href="#!">
                  <div
                    class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                  ></div>
                </a>
              </div>
            </div>
            <div class="p-6">
              <h5 class="mb-2 text-lg font-bold">John Doe</h5>
              <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                Traveler since 2021
              </h6>
              <ul class="mb-6 flex justify-center">
                <!-- Vue.js v-for loop with Tailwind CSS classes -->
                <li v-for="item in 5" :key="item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    ></path>
                  </svg>
                </li>
              </ul>
              <p class="text-base">
                "I cannot say enough good things about this hotel. From the moment I
                arrived, I felt welcomed and well taken care of. The rooms are comfortable
                and well-equipped. A wonderful overall experience!"
              </p>
            </div>
          </div>
        </div>

        <div class="mb-6 lg:mb-0">
          <div
            class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-blue-200"
          >
            <div class="flex">
              <div
                class="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg"
                  class="w-full"
                />
                <a href="#!">
                  <div
                    class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                  ></div>
                </a>
              </div>
            </div>
            <div class="p-6">
              <h5 class="mb-2 text-lg font-bold">Halley Frank</h5>
              <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                Traveler since 2020
              </h6>
              <ul class="mb-6 flex justify-center">
                <!-- Vue.js v-for loop with Tailwind CSS classes -->
                <li v-for="item in 4" :key="item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    ></path>
                  </svg>
                </li>
              </ul>
              <p class="text-base">
                "This hotel offers an excellent value for money. The rooms were cozy and
                clean, and the staff made an effort to ensure my stay was enjoyable. I
                would definitely recommend it to other travelers."
              </p>
            </div>
          </div>
        </div>

        <div class="mb-0">
          <div
            class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-blue-200"
          >
            <div class="flex">
              <div
                class="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/18.jpg"
                  class="w-full"
                />
                <a href="#!">
                  <div
                    class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                  ></div>
                </a>
              </div>
            </div>
            <div class="p-6">
              <h5 class="mb-2 text-lg font-bold">Lisa Gray</h5>
              <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                Traveler since 2022
              </h6>
              <ul class="mb-6 flex justify-center">
                <!-- Vue.js v-for loop with Tailwind CSS classes -->
                <li v-for="item in 5" :key="item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="w-5 text-warning"
                  >
                    <path
                      fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    ></path>
                  </svg>
                </li>
              </ul>
              <p class="text-base">
                "A charming hotel in the heart of the city. The rooms have a unique and
                cozy decoration. The staff is friendly and always ready to help. The
                location is perfect for exploring tourist sites. I will definitely come
                back!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section: Design Block -->
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
