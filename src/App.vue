<script setup>
// import { useRecipesStore } from './stores/recipes'

// const recipesStore = useRecipesStore()
</script>

<template>
  <header class="header">
    <div class="container header_container">
      <h1 class="header_text">Recipes</h1>
      <div class="links">
        <RouterLink class="link" to="/">All recipes</RouterLink>
        <RouterLink class="link" to="/favourite">Favourite recipes</RouterLink>
      </div>
    </div>
  </header>
  <RouterView></RouterView>
</template>

<style scoped>
.header {
  background-color: #ffa032;
  height: 160px;
}

.header_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0 50px;
}

.link {
  color: black;
  text-decoration: none;
  padding: 15px 32px;
  background-color: #ff4f04;
  border-radius: 47px;
}

.links {
  display: flex;
  gap: 46px;
}

.header_text {
  font-size: 48px;
  padding: 20px 50px;
  background-color: #ff4f04;
  border-radius: 25px;
}
</style>
