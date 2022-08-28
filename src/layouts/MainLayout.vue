<template>
  <q-layout>
    <q-header>
      <div class="container">
        <q-toolbar class="row reverse justify-between">
          <q-toolbar-title class="row reverse">
            <q-btn
              :icon="roundAccountCircle"
              flat
              dense
              size="16px"
              round
              class="q-ml-xl"
              @click="loadDialog"
            />
            <a
              href="/"
              class="q-link text-white"
            >
              Basic Learn
            </a>
          </q-toolbar-title>
          <div class="q-gutter-x-md">
            <q-btn
              v-for="menu in menuList"
              :key="menu"
              flat
              no-caps
              :label="menu.label"
              :to="menu.link"
            />
          </div>
        </q-toolbar>
      </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <div class="bg-primary text-white">
      <div class="container">
        <div class="q-pa-lg">
          <div class="text-h5 q-mb-4xl">
            Basic Learn
          </div>
          <div class="row">
            <div class="col-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, consequuntur hic neque, veritatis, quia deleniti voluptatum praesentium suscipit dicta minus impedit! Quam perspiciatis vel rem esse voluptates soluta quae? Facilis!
            </div>
            <div class="q-gutter-x-md column col-4">
              <q-btn
                v-for="menu in menuList"
                :key="menu"
                flat
                no-caps
                :label="menu.label"
                :to="menu.link"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script setup>
import { } from 'vue'
import { useQuasar } from 'quasar'

import { roundAccountCircle } from '@quasar/extras/material-icons-round'

const $q = useQuasar()

const menuList = [
  {
    label: 'Home',
    link: { name: 'Home' }
  },
  // {
  //   label: 'Category'
  // },
  {
    label: 'About Us',
    link: { name: 'AboutUs' }
  },
  {
    label: 'Contact Us',
    link: { name: 'ContactUs' }
  }
]

const loadDialog = async () => {
  const Dialog = await import('pages/register/IndexPage.vue')

  $q.dialog({
    component: Dialog.default
  })
}

</script>
