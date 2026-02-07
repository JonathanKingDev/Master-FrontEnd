<template>
  <section class="space-y-6">
    <div class="bg-white rounded-2xl shadow-sm border p-4">
      <h2 class="text-lg font-semibold mb-3">Lista de platos favoritos</h2>
      <FavoriteList />
    </div>

    <div class="bg-white rounded-2xl shadow-sm border p-4">
      <h3 class="font-semibold mb-3">Usar favorito en el plan</h3>

      <div class="grid gap-3 md:grid-cols-3">
        <div>
          <label class="block text-sm font-medium mb-1">Día</label>
          <select v-model="day" class="w-full px-3 py-2 rounded-lg border bg-white">
            <option v-for="d in store.days" :key="d" :value="d">{{ d }}</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Tipo</label>
          <select v-model="type" class="w-full px-3 py-2 rounded-lg border bg-white">
            <option v-for="t in store.mealTypes" :key="t" :value="t">{{ t }}</option>
          </select>
        </div>
      </div>

      <p class="text-sm text-gray-600 mt-3">
        Consejo: desde la lista puedes “Añadir al plan” directamente.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import FavoriteList from '../components/favorites/FavoriteList.vue'
import { useMealsStore } from '../stores/meals'

const store = useMealsStore()
const day = ref(store.days[0])
const type = ref(store.mealTypes[0])
</script>
