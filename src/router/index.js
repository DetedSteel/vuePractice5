import { createRouter, createWebHistory } from 'vue-router'
import AllRecipesVue from '@/views/AllRecipes.vue'
import FavouriteRecipes from '@/views/FavouriteRecipes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AllRecipesVue
    },
    {
      path: '/favourite',
      name: 'favourite',
      component: FavouriteRecipes
    }
  ]
})

export default router
