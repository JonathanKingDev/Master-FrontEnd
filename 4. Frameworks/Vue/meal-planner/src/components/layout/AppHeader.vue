<template>
  <header class="bg-white border-b">
    <div class="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
      <h1 class="text-xl font-semibold">Meal Planner</h1>

      <nav class="flex gap-2">
        <RouterLink to="/" class="px-3 py-2 rounded-lg text-sm" :class="linkClass('/')">
          Plan semanal
        </RouterLink>

        <RouterLink
          to="/favorites"
          class="px-3 py-2 rounded-lg text-sm"
          :class="linkClass('/favorites')"
        >
          Favoritos
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const linkClass = (path) =>
  route.path === path ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
</script>
