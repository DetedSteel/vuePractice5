import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useFavouriteRecipesStore = defineStore('favouriteRecipes', () => {
  const favouriteRecipes = ref([])

  function addToFavourite(recipe) {
    let isInList = false
    favouriteRecipes.value.forEach((e) => {
      if (e.id === recipe.id) {
        isInList = true
      }
    })
    if (!isInList) {
      favouriteRecipes.value.push(recipe)
    }
  }

  function removeFromFavourite(id) {
    favouriteRecipes.value = favouriteRecipes.value.filter((e) => e.id !== id)
  }

  const easyRecipes = computed(() => {
    return favouriteRecipes.value.filter((e) => e.difficulty === 'Easy')
  })

  const mediumRecipes = computed(() => {
    return favouriteRecipes.value.filter((e) => e.difficulty === 'Medium')
  })

  function changeWatch(id) {
    favouriteRecipes.value.map((e) => {
      if (e.id === id) {
        e.watched = !e.watched
      }
      return e
    })
  }

  return {
    favouriteRecipes,
    addToFavourite,
    removeFromFavourite,
    changeWatch,
    easyRecipes,
    mediumRecipes
  }
})
