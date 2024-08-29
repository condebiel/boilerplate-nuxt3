<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="mx-auto my-10 max-w-4xl rounded-lg bg-white p-8 shadow-lg">
    <div class="mb-8 text-center">
      <h1 class="text-2xl font-bold text-gray-900">
        {{ t('home.title') }}
      </h1>
      <p class="mt-2 text-lg text-gray-600">
        {{ t('home.subtitle') }}
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
          {{ t('home.item1.title') }}
        </h2>
        <p class="mt-2 text-gray-600">
          {{ t('home.item1.subtitle') }}
        </p>
        <button
          class="
            mt-4 rounded-lg bg-yellow-600 px-4 py-2 font-semibold text-white
          "
        >
          {{ t('home.showMore') }}
        </button>
      </div>

      <div class="flex-1 rounded-lg border p-6 text-center shadow-lg">
        <h2 class="text-xl font-semibold text-gray-900">
          {{ t('home.item2.title') }}
        </h2>
        <p class="mt-2 text-gray-600">
          {{ t('home.item2.subtitle') }}
        </p>
        <button
          class="
            mt-4 rounded-lg bg-yellow-600 px-4 py-2 font-semibold text-white
          "
        >
          {{ t('home.showMore') }}
        </button>
      </div>
    </div>
  </div>
</template>
