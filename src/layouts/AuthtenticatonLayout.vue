<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <div class="q-px-sm q-py-2xl">
        <div class="text-h4 text-center q-mb-xl">
          Admin Panel
        </div>
        <div class="column q-gutter-md">
          <q-btn
            v-for="btn in menus"
            :key="btn"
            :to="btn.link"
            :color="menu === btn.label ? 'primary': null"
            :text-color="menu !== btn.label ? 'secondary': null"
            :label="btn.label"
            no-caps
            padding="12px"
            unelevated
            @click="menu = btn.label"
          />
        </div>
      </div>
    </q-drawer>
    <q-header>
      <q-toolbar class="row justify-end">
        <div class="row items-end">
          <q-btn
            label="Log out"
            color="secondary"
            padding="12px 24px"
            unelevated
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
// import { useAppStore } from 'src/stores/app-store'
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
const menu = ref('User management')

// const store = useAppStore()

const menus = [
  {
    label: 'User management'
  },
  {
    label: 'Products',
    link: { name: 'Products' }
  }
]

</script>
