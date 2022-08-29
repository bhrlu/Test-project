<template>
  <q-page padding>
    <div class="container">
      <div class="row q-col-gutter-x-md">
        <div class="col-3">
          <q-card class="shadow-1">
            <q-card-section>
              <div class="column q-gutter-y-md">
                <q-btn
                  v-for="btn in btns"
                  :key="btn"
                  :color="menu === btn.label ? 'primary': null"
                  :text-color="menu !== btn.label ? 'secondary': null"
                  :label="btn.label"
                  no-caps
                  padding="8px "
                  unelevated
                  @click="menu = btn.label"
                />
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-9">
          <component :is="components[menu]" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue'

const components = {
  Informations: defineAsyncComponent(() => import('./UserInfo.vue')),
  'My courses': defineAsyncComponent(() => import('./UserCourse.vue'))
}

const menu = ref('Informations')

const btns = [
  {
    label: 'Informations'
  },
  {
    label: 'My courses'
  }
]

</script>
