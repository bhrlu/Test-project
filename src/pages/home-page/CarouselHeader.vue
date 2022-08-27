<template>
  <div>
    <q-carousel
      v-model="slide"
      animated
      control-color="white"
      height="300px"
      class="bg-primary text-white rounded-borders"
    >
      <q-carousel-slide
        class="no-padding"
        :name="1"
      >
        hi
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// import { roundLens } from '@quasar/extras/material-icons-round'

const slide = ref(1)
</script>
