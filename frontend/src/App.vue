<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <div class="card">
          <div class="left">
          <div class="home"><RouterLink to="/">Home</RouterLink></div>
          <div class="guess"><RouterLink to="/guess">Guess</RouterLink></div>
          <div class="quiz"><RouterLink to="/quiz">Quiz</RouterLink></div>
          <div class="map"><RouterLink to="/map">Map</RouterLink></div>
        </div> 
        <div class="right">
          <div class="about"><RouterLink to="/about">About</RouterLink></div>
        </div>
        </div>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.left{
  height: 100%;
  display: inherit;
}
.right{
  height: 100%;
  display: inherit;
}
.home{
  display: inherit;
  height: 100%;
}
.home a{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
}
.guess{
  display: inherit;
  height: 100%;
}
.guess a{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
}
.map{
  display: inherit;
  height: 100%;
}
.map a{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
}
.quiz{
  display: inherit;
  height: 100%;
}
.quiz a{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
}
.about a{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
}
.about{
  display: inherit;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
}
.card{
  height: 100%;
  display:flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
}
header{
  display: flex;
  height: 7%;
}

nav {
  background-color: rgb(49, 49, 49);
  width: 100%;
  height: 100%;
  font-size: 20px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (hover: hover) {
  .home:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
  .about:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
  .guess:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
  .map:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
  .quiz:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}
</style>
