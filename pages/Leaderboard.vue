<template>
  <div class="container mx-auto p-10 text-center">
    <h1 class="text-4xl font-bold mb-4">Welcome bij het 23G Racer Leaderboard</h1>
    <p class="text-lg text-gray-700 mb-10">
      Hier zie je alle ronde tijden!
    </p>
  </div>
  <div class="container mx-auto p-4">
    <div v-if="times.length" v-for="time in times" :key="time.id" class="container rounded-xl mx-auto p-4 w-80 text-center shadow-xl m-5">
      <h2 class="text-xl font-semibold">{{ time.title }}</h2>
      <p class="text-gray-600">Ronde tijd :{{ time.time }}</p>
      <p class="text-gray-600">Datum : {{ time.date }}</p>

      <div class="mt-2 gap-2">
        <div class="m-4 gap-4 items-center">
        <NuxtLink :to="`/edit/${time.id}`" class="bg-blue-500 text-white px-4 py-2 rounded m-2">Edit</NuxtLink>
        <NuxtLink :to="`/delete/${time.id}`" class="bg-red-500 text-white px-4 py-2 rounded">Delete</NuxtLink>
      </div>
      
      </div>
      
    </div>
    <div v-else class="container rounded-xl bg-red-400 mx-auto p-4 w-60 text-center shadow-xl">Er zijn nog geen ronde tijden, let op de data is nog niet dynamisch!</div>

  </div>
</template>

<script setup>
import { useTimes } from '@/composables/useTime.js';

const { times } = useTimes();
</script>