<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list separator>
        <q-item
          v-for="menu in menus"
          :key="menu"
          v-ripple
          clickable
        >
          {{ menu.label }}
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

const menus = [
  {
    label: 'Admin management'
  },
  {
    label: 'User management'
  },
  {
    label: 'products'
  }
]

</script>
