import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useRecipesStore = defineStore('recipes', () => {
  const recipes = ref([])

  async function getRecipes() {
    recipes.value = (await axios.get('https://dummyjson.com/recipes')).data.recipes
  }

  async function getSearchRecipes(name) {
    recipes.value = (await axios.get(`https://dummyjson.com/recipes/search?q=${name}`)).data.recipes
  }

  return { recipes, getRecipes, getSearchRecipes }
})
