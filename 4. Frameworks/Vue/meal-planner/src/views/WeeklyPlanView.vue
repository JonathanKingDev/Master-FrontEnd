<template>
  <section class="space-y-6">
    <div class="bg-white rounded-2xl shadow-sm border p-4">
      <h2 class="text-lg font-semibold mb-3">Agregar plato</h2>
      <MealForm />
    </div>

    <div class="flex items-center justify-between">
      <h2 class="text-lg font-semibold">Plan semanal</h2>

      <button
        class="px-3 py-2 text-sm rounded-lg bg-gray-100 hover:bg-gray-200"
        @click="store.resetWeek()"
        type="button"
      >
        Reset semana
      </button>
    </div>

    <MealList />
  </section>
</template>

<script setup>
import MealForm from '../components/meals/MealForm.vue'
import MealList from '../components/meals/MealList.vue'
import { useMealsStore } from '../stores/meals'

const store = useMealsStore()
</script>
