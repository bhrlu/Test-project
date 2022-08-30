<template>
  <q-dialog
    ref="dialogRef"
    persistent
    @hide="onDialogHide"
  >
    <q-card class="card-width-scope">
      <q-card-section>
        <div class="flex justify-end q-mb-md">
          <q-btn
            v-close-popup
            :icon="roundClose"
            flat
            dense
            round
          />
        </div>
        <q-tabs v-model="tabs">
          <q-tab
            name="LogIn"
            label="Log in"
          />
          <q-tab
            name="SignUp"
            label="Sign up"
          />
        </q-tabs>
        <q-tab-panels v-model="tabs">
          <q-tab-panel name="LogIn">
            <log-in />
          </q-tab-panel>
          <q-tab-panel name="SignUp">
            <sign-up />
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue'
import { useDialogPluginComponent } from 'quasar'

import { roundClose } from '@quasar/extras/material-icons-round'

const { dialogRef, onDialogHide } = useDialogPluginComponent()

defineEmits([
  ...useDialogPluginComponent.emits
])

const LogIn = defineAsyncComponent(() => import('./LogIn.vue'))
const SignUp = defineAsyncComponent(() => import('./SignUp.vue'))

const tabs = ref('LogIn')

</script>

<style lang="sass" scoped>
.card-width-scope
  width: 496px
  max-width: 496px

</style>
