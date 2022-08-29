<template>
  <q-card class="shadow-1">
    <q-card-section>
      <card-list />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const cardList = defineAsyncComponent(() => import('pages/home-page/CardList.vue'))
</script>

<style>

</style>
