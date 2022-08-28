<template>
  <q-dialog
    ref="dialogRef"
    persistent
    @hide="onDialogHide"
  >
    <q-card class="shadow-1 card-width">
      <q-card-section>
        <div class="column items-center">
          <q-icon
            :name="roundCheckCircle"
            size="56px"
            color="positive"
          />
          <div class="text-seconary text-h5">
            The purchase was made successfully.
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useDialogPluginComponent } from 'quasar'

import { roundCheckCircle } from '@quasar/extras/material-icons-round'

const { dialogRef, onDialogHide } = useDialogPluginComponent()

defineEmits([
  ...useDialogPluginComponent.emits
])

</script>
