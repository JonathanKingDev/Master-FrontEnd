import { defineStore } from 'pinia'

const DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

const MEAL_TYPES = ['Comida', 'Cena']

function uid() {
  return crypto?.randomUUID?.() ?? String(Date.now() + Math.random())
}

function defaultWeek() {
  // week[day] = { Comida: [], Cena: [] }
  return Object.fromEntries(
    DAYS.map((d) => [d, Object.fromEntries(MEAL_TYPES.map((t) => [t, []]))]),
  )
}

export const useMealsStore = defineStore('meals', {
  state: () => ({
    days: DAYS,
    mealTypes: MEAL_TYPES,
    week: defaultWeek(),
    favorites: [], // { id, name }
  }),

  actions: {
    addMeal({ name, day, type }) {
      const cleanName = (name ?? '').trim()
      if (!cleanName) return
      if (!this.week[day] || !this.week[day][type]) return

      this.week[day][type].push({
        id: uid(),
        name: cleanName,
        createdAt: Date.now(),
      })
    },

    removeMeal({ day, type, mealId }) {
      if (!this.week[day] || !this.week[day][type]) return
      this.week[day][type] = this.week[day][type].filter((m) => m.id !== mealId)
    },

    addFavorite(name) {
      const clean = (name ?? '').trim()
      if (!clean) return

      const exists = this.favorites.some((f) => f.name.toLowerCase() === clean.toLowerCase())
      if (exists) return

      this.favorites.push({ id: uid(), name: clean })
    },

    removeFavorite(favId) {
      this.favorites = this.favorites.filter((f) => f.id !== favId)
    },

    useFavorite({ favoriteName, day, type }) {
      this.addMeal({ name: favoriteName, day, type })
    },

    resetWeek() {
      this.week = defaultWeek()
    },
  },
})
