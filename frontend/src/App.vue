<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import router from './router';

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    route:'/',
  },
  {
    label: 'Games',
    icon: 'pi pi-star',
    items: [
      {
        label: 'Map',
        icon: 'pi pi-bolt',
        route:'/map'
      },
      {
        label: 'Quiz',
        icon: 'pi pi-server',
        route:'/quiz'
      },
      {
        label: 'Guess',
        icon: 'pi pi-pencil',
        route:'/guess'
      },
    ]
  },
  {
    label: 'About',
    icon: 'pi pi-envelope',
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
      <template #end>
          <div class="flex align-items-center gap-2">
              <InputText placeholder="Search" type="text" class="w-8rem sm:w-auto" />
          </div>
      </template>
  </Menubar>
  </header>

  <RouterView />
</template>

<style scoped>

header{
  display: flex;
  height: 7%;
  width: 100%;
}
.nav{
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
