<template>
  <div class="mx-auto my-10 max-w-4xl rounded-lg bg-white p-8 shadow-lg">
    <div class="mb-8 text-center">
      <h1 class="text-2xl font-bold text-gray-900">
        This is a simple Nuxt3 Boilerplate
      </h1>
      <p class="mt-2 text-lg text-gray-600">
        Choose the best plan for you
      </p>
    </div>

    <div
      class="
        mb-10 flex flex-col justify-center gap-8

        lg:flex-row
      "
    >
      <div class="flex-1 rounded-lg border p-6 text-center shadow-lg">
        <h2 class="text-xl font-semibold text-gray-900">
          Amazing topic 1
        </h2>
        <p class="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id ex vulputate, aliquet ipsum vel, pellentesque nisi.
        </p>
        <button
          class="
            mt-4 rounded-lg bg-yellow-600 px-4 py-2 font-semibold text-white
          "
        >
          Show me more
        </button>
      </div>

      <div class="flex-1 rounded-lg border p-6 text-center shadow-lg">
        <h2 class="text-xl font-semibold text-gray-900">
          Amazing header
        </h2>
        <p class="mt-2 text-gray-600">
          Sed velit nibh, ultrices id ante ac, tristique blandit nunc. Nullam nec quam eu sem imperdiet sollicitudin.
        </p>
        <button
          class="
            mt-4 rounded-lg bg-yellow-600 px-4 py-2 font-semibold text-white
          "
        >
          Show me more
        </button>
      </div>
    </div>
  </div>
</template>
