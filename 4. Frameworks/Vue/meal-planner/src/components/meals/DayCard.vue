<template>
  <article class="bg-white rounded-2xl shadow-sm border p-4">
    <h3 class="font-semibold text-base mb-3">{{ day }}</h3>

    <div class="grid gap-4 md:grid-cols-2">
      <section v-for="t in store.mealTypes" :key="t" class="space-y-2">
        <div class="flex items-center justify-between">
          <h4 class="text-sm font-medium text-gray-700">{{ t }}</h4>
          <span class="text-xs text-gray-500"> {{ store.week[day][t].length }} plato(s) </span>
        </div>

        <ul v-if="store.week[day][t].length" class="space-y-2">
          <li
            v-for="m in store.week[day][t]"
            :key="m.id"
            class="flex items-center justify-between gap-2 border rounded-lg px-3 py-2"
          >
            <span class="text-sm">{{ m.name }}</span>

            <button
              class="text-sm px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200"
              type="button"
              @click="store.removeMeal({ day, type: t, mealId: m.id })"
            >
              Eliminar
            </button>
          </li>
        </ul>

        <p v-else class="text-sm text-gray-500">Sin platos</p>
      </section>
    </div>
  </article>
</template>

<script setup>
import { useMealsStore } from '../../stores/meals'

defineProps({
  day: { type: String, required: true },
})

const store = useMealsStore()
</script>
