<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    route:'/',
  },
  {
    label: 'Map',
    icon: 'pi pi-globe',
    route:'/map'
  },
  {
    label: 'Quiz',
    icon: 'pi pi-question-circle',
    route:'/quiz'
  },
  {
     label: 'Guess',
     icon: 'pi pi-verified',
     route:'/guess'
  },
  {
    label: 'About',
    icon: 'pi pi-info-circle',
    route:'/about',
  }
]);
</script>

<template>
  <header>
    <Menubar class="nav" :model="items">
      <template #item="{ item, props, hasSubmenu }">
                  <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                      <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                          <span :class="item.icon" />
                          <span class="ml-2">{{ item.label }}</span>
                      </a>
                  </router-link>
                  <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                      <span :class="item.icon" />
                      <span class="ml-2">{{ item.label }}</span>
                      <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
                  </a>
              </template>
  </Menubar>
  </header>
  <RouterView />
</template>

<style scoped>

header{
  z-index: 10;
  position: fixed;
  display: flex;
  height: 7%;
  width: 100%;
}
.nav{
  display: flex;
  justify-content: space-between;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  width:100%;
  background-color: rgb(49,49,49);
  border:none
}
.item{
  padding: 20px;
}
span{
  padding: 2px;
}

</style>
