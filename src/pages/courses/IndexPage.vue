<template>
  <q-page padding>
    <div class="container">
      <div class="q-col-gutter-y-lg">
        <course-header />
        <course-session
          v-for="i in 5"
          :key="i"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const CourseHeader = defineAsyncComponent(() => import('./CourseHeader.vue'))
const CourseSession = defineAsyncComponent(() => import('./CourseSession.vue'))

</script>
