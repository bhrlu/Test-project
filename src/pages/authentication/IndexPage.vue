<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container class="window-height flex items-center justify-center bg-grey-4">
      <q-card
        class="border-radius-8"
        style="width: 400px"
      >
        <q-card-section>
          <q-form class="q-col-gutter-md">
            <div class="text-center">
              <div class="text-h4">
                Welcome
              </div>
            </div>
            <div>
              <label> User name: </label>
              <q-input
                v-model="form.username"
                dense
                outlined
              />
            </div>
            <div>
              <label> Password: </label>
              <q-input
                v-model="form.password"
                dense
                outlined
              />
            </div>
            <div>
              <q-btn
                color="primary"
                class="full-width"
                label="Log In"
                padding="12px 0"
                unelevated
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  username: null,
  password: null
})

// const login = () => {

// }
</script>
