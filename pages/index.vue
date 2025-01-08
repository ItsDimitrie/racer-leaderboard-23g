<template>
  <div class="container mx-auto p-10 text-center ">
    <img src="/racer.png" alt="Logo" class="w-200 h-200 m-auto mb-10" />

    <h1 class="text-4xl font-bold mb-4">Welcome bij het 23G Racer Leaderboard</h1>
    <p class="text-lg text-gray-700 mb-10">
      In deze applicatie kan je ronde tijden toevoegen en het leaderboard bekijken van de race simulator op het kantoor!
    </p>
    <NuxtLink to="/Leaderboard" class="bg-orange-400 text-black px-6 py-3 rounded-lg text-xl m-3 hover:bg-orange-200">
      Bekijk het leaderboard
    </NuxtLink>
    <NuxtLink to="/AddTime" class="bg-orange-400 text-black px-6 py-3 rounded-lg text-xl m-3 hover:bg-orange-200">
      Voeg een ronde tijd toe!
    </NuxtLink>
  </div>
</template>

<script setup>

</script>
