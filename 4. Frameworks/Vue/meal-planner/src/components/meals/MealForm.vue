<template>
  <form class="grid gap-3 md:grid-cols-4" @submit.prevent="onSubmit">
    <div class="md:col-span-2">
      <label class="block text-sm font-medium mb-1">Nombre del plato</label>
      <input
        v-model="name"
        class="w-full px-3 py-2 rounded-lg border bg-white"
        type="text"
        placeholder="Ej: Lentejas"
        autocomplete="off"
      />
    </div>

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

    <div class="md:col-span-4 flex flex-wrap gap-2 items-center">
      <button
        class="px-4 py-2 rounded-lg bg-black text-white text-sm hover:opacity-90"
        type="submit"
      >
        Agregar
      </button>

      <button
        class="px-4 py-2 rounded-lg bg-gray-100 text-sm hover:bg-gray-200"
        type="button"
        @click="onAddFavorite"
      >
        Guardar en favoritos
      </button>

      <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useMealsStore } from '../../stores/meals'

const store = useMealsStore()

const name = ref('')
const day = ref(store.days[0])
const type = ref(store.mealTypes[0])
const error = ref('')

function resetForm() {
  name.value = ''
  day.value = store.days[0]
  type.value = store.mealTypes[0]
  error.value = ''
}

function onSubmit() {
  const clean = name.value.trim()
  if (!clean) {
    error.value = 'El nombre del plato es obligatorio.'
    return
  }

  store.addMeal({ name: clean, day: day.value, type: type.value })
  resetForm()
}

function onAddFavorite() {
  const clean = name.value.trim()
  if (!clean) {
    error.value = 'Escribe un plato para guardarlo en favoritos.'
    return
  }
  store.addFavorite(clean)
  error.value = ''
}
</script>
