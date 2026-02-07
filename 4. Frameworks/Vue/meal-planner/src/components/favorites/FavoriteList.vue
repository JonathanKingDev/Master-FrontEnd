<template>
  <div class="space-y-3">
    <div v-if="!store.favorites.length" class="text-sm text-gray-600">
      Aún no tienes favoritos. Puedes guardarlos desde el formulario en “Plan semanal”.
    </div>

    <ul v-else class="space-y-2">
      <li
        v-for="f in store.favorites"
        :key="f.id"
        class="flex flex-wrap items-center justify-between gap-2 border rounded-lg px-3 py-2 bg-white"
      >
        <span class="text-sm font-medium">{{ f.name }}</span>

        <div class="flex gap-2">
          <button
            class="text-sm px-3 py-1.5 rounded-md bg-black text-white hover:opacity-90"
            type="button"
            @click="quickAdd(f.name)"
          >
            Añadir al plan
          </button>

          <button
            class="text-sm px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200"
            type="button"
            @click="store.removeFavorite(f.id)"
          >
            Eliminar
          </button>
        </div>
      </li>
    </ul>

    <div class="grid gap-3 md:grid-cols-2 mt-4">
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

    <p class="text-xs text-gray-500">
      El selector “Día/Tipo” afecta al botón “Añadir al plan” de cada favorito.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMealsStore } from '../../stores/meals'

const store = useMealsStore()
const day = ref(store.days[0])
const type = ref(store.mealTypes[0])

function quickAdd(favoriteName) {
  store.useFavorite({ favoriteName, day: day.value, type: type.value })
}
</script>
