<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import "primevue/resources/themes/md-light-deeppurple/theme.css"
</script>

<template>
  <header>
      <nav>
        <div class="card">
          <div><RouterLink to="/">Home</RouterLink></div>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/login">Login</RouterLink>
        </div>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header{
  height: 7%;
}
/* a{
  height: 100%;
  width: 100%;
} */
.card{
  height: 100%;
  background-color: rgba(50, 50, 50, 0.295);
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
@media (hover: hover) {
  a:hover {
    background-color: rgba(120, 120, 120, 0.236);
  }
}

</style>
