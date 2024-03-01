<template>
  <div class="container recipes_container">
    <h1 class="header">All recipes</h1>
    <form
      @submit="
        (e) => {
          e.preventDefault()
          recipesStore.getSearchRecipes(search)
        }
      "
    >
      <label class="label">Search recipes</label>
      <input
        class="input"
        type="text"
        @change="
          (e) => {
            search = e.target.value
          }
        "
      />
    </form>
    <div class="cards">
      <div class="card" v-for="recipe in recipesStore.recipes" :key="recipe.id">
        <img class="img" :src="recipe.image" alt="" />
        <div class="text_content">
          <h2 class="card_header">{{ recipe.name }}</h2>
          <p class="card_text">Difficulty: {{ recipe.difficulty }}</p>
          <p class="card_text">Cuisine: {{ recipe.cuisine }}</p>
          <button @click="handleAdd(recipe)" class="add_to_favourite">Add to favorite</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRecipesStore } from '../stores/recipes'
import { useFavouriteRecipesStore } from '../stores/favouriteRecipes'

const search = ref('')

const recipesStore = useRecipesStore()
const favouriteRecipesStore = useFavouriteRecipesStore()

function handleAdd(recipe) {
  recipe.watched = false
  favouriteRecipesStore.addToFavourite(recipe)
}

onMounted(() => {
  recipesStore.getRecipes()
})
</script>
<style scoped>
.input {
  border-radius: 15px;
  border: 1px solid black;
  width: 425px;
  height: 46px;
  padding-left: 20px;
  font-weight: 700;
  font-size: 16px;
}

.label {
  display: block;
  margin-bottom: 5px;
  color: #414141;
  font-weight: 700;
  font-size: 16px;
}

.recipes_container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  margin-top: 34px;
  margin-bottom: 34px;
  font-weight: 400;
  font-size: 48px;
}

.card {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  width: 256px;
  overflow: hidden;
}

.img {
  width: 256px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 256px);
  column-gap: 28px;
  row-gap: 50px;
  margin-top: 72px;
}

.add_to_favourite {
  padding: 14px 28px;
  background-color: #ff4f04;
  border-radius: 25px;
  border: none;
  font-weight: 700;
  font-size: 16px;
  margin-top: 12px;
  align-self: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.add_to_favourite:hover {
  background-color: rgba(255, 79, 4, 0.8);
}

.text_content {
  margin-bottom: 12px;
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.card_text {
  font-size: 12px;
  font-weight: 400;
  margin-left: 18px;
}

.card_header {
  font-size: 16px;
  font-weight: 700;
  margin-left: 18px;
}
</style>
