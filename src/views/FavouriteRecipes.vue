<template>
  <div class="container favorite_container">
    <h1>Favourite ({{ favouriteRecipesStore.favouriteRecipes.length }})</h1>
    <label class="label"></label>
    <select @change="handleSort" class="select">
      <option value="all">All</option>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
    </select>
    <div class="cards">
      <div v-for="recipe in recipes" :key="recipe.id" class="card">
        <img class="img" :src="recipe.image" alt="" />
        <div class="text_and_btns">
          <div class="card_text_cont">
            <h2 class="card_header">{{ recipe.name }}</h2>
            <p class="card_text">Difficulty: {{ recipe.difficulty }}</p>
            <p class="card_text">Cuisine: {{ recipe.cuisine }}</p>
          </div>
          <div class="card_btns">
            <button
              :class="`btn  ${recipe.watched ? 'btn_green' : 'btn_blue'}`"
              @click="favouriteRecipesStore.changeWatch(recipe.id)"
            >
              {{ recipe.watched ? 'Watched' : 'Unwatched' }}
            </button>
            <button @click="handleDelete(recipe.id)" class="btn btn_red">Remove</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useFavouriteRecipesStore } from '../stores/favouriteRecipes'
import { ref } from 'vue'

const favouriteRecipesStore = useFavouriteRecipesStore()

let recipes = ref(favouriteRecipesStore.favouriteRecipes)

function handleDelete(id) {
  favouriteRecipesStore.removeFromFavourite(id)
  recipes.value = favouriteRecipesStore.favouriteRecipes
}

function handleSort(e) {
  if (e.target.value === 'all') {
    recipes.value = favouriteRecipesStore.favouriteRecipes
  } else if (e.target.value === 'easy') {
    recipes.value = favouriteRecipesStore.easyRecipes
  } else {
    recipes.value = favouriteRecipesStore.mediumRecipes
  }
}
</script>
<style scoped>
.favorite_container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-top: 66px;
}

.card {
  width: 474px;
  height: 285px;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
}

.card {
  transition: all 1s ease-in-out;
}

.img {
  width: 253px;
  height: 285px;
}

.text_and_btns {
  display: flex;
  margin-right: 11px;
  margin-top: 23px;
  margin-bottom: 29px;
  margin-left: 14px;
}

.card_btns {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 19px;
}

.card_text_cont {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.card_text {
  font-size: 12px;
  font-weight: 400;
}

.card_header {
  font-size: 16px;
  font-weight: 700;
}

.text_and_btns {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.btn {
  padding: 15px 30px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
}

.btn_red {
  background-color: rgb(255, 4, 4);
}

.btn_green {
  background-color: rgb(111, 255, 143);
}

.btn_blue {
  background-color: rgb(133, 211, 255);
}

.select {
  margin-top: 5px;
  border-radius: 15px;
  width: 162px;
  height: 46px;
  padding-left: 18px;
  font-weight: 700;
  font-size: 16px;
  outline: none;
}

.label {
  display: block;
  margin-top: 37px;
  color: #414141;
  font-weight: 700;
  font-size: 16px;
}
</style>
