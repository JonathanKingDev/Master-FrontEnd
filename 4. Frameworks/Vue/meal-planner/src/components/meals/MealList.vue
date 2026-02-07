<template>
  <div class="grid gap-4 md:grid-cols-2">
    <DayCard v-for="d in store.days" :key="d" :day="d" />
  </div>
</template>

<script setup>
import { useMealsStore } from '../../stores/meals'
import DayCard from './DayCard.vue'

const store = useMealsStore()
</script>
