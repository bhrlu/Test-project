<template>
  <q-dialog
    ref="dialogRef"
    persistent
    @hide="onDialogHide"
  >
    <q-card class="card-width">
      <q-card-section>
        <div class="row items-center justify-between q-mb-lg">
          <div class="text-h6 text-secondary">
            Add product
          </div>
          <q-btn
            v-close-popup
            :icon="roundClose"
            round
            text-color="secondary"
            unelevated
          />
        </div>
        <q-form @submit.prevent="">
          <div class="q-col-gutter-md">
            <div>
              <label>Title</label>
              <q-input
                v-model="form.title"
                outlined
              />
            </div>
            <div>
              <label>Description</label>
              <q-input
                v-model="form.desc_sm"
                outlined
              />
            </div>
            <div>
              <label>Image</label>
            <!-- <q-input outlined v-model="form."/> -->
            </div>
            <div>
              <label>File</label>
            <!-- <q-input outlined v-model="form."/> -->
            </div>
            <div>
              <q-btn
                label="Create"
                class="full-width"
                color="primary"
                no-caps
                unelevated
                padding="12px"
                type="submit"
              />
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { useDialogPluginComponent } from 'quasar'

import { roundClose } from '@quasar/extras/material-icons-round'

defineEmits([
  ...useDialogPluginComponent.emits
])

const { dialogRef, onDialogHide } = useDialogPluginComponent()

const form = ref({
  category: null,
  title: null,
  desc_sm: null,
  price: 0,
  file: null,
  type: 1,
  level: 1,
  prerequisites: 1,
  is_free: 1,
  is_published: 1
})
</script>
