<template>
  <div class="min-h-screen">
    <AppHeader />
    <main class="max-w-5xl mx-auto px-4 py-6">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import AppHeader from './components/layout/AppHeader.vue'
</script>
