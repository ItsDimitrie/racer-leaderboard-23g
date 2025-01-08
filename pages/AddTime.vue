<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Voeg een nieuwe ronde tijd toe.</h1>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="title" class="block font-semibold">Race Naam:</label>
        <input
          v-model="title"
          type="text"
          id="title"
          class="w-full border rounded p-2"
          placeholder="Voeg race naam toe"
          required />
      </div>
      <div>
        <label for="tijd" class="block font-semibold">Lap time:</label>
        <input class="w-full border rounded p-2" 
        type="time" 
        id="time" 
        name="tijd" 
        min="00:00:00" 
        max="05:00:00" 
        required />
      </div>
      <div>
        <div>
        <label for="date" class="block font-semibold">Datum:</label>
        <input
          v-model="date"
          type="date"
          id="date"
          class="w-full border rounded p-2"
          required />
      </div>

      </div>
      <button type="submit" class="bg-orange-400 text-black px-6 py-3 rounded-lg text-xl -ml-0.2">Voeg toe</button>
    </form>
  </div>
</template>

<script setup>

</script>