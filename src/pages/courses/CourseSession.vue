<template>
  <div>
    <q-card class="shadow-1">
      <q-card-section class="row justify-between">
        <div class="row items-center q-gutter-x-md ">
          <q-icon
            size="48px"
            :name="roundPlayCircle"
            color="primary"
          />
          <div class="text-secondary text-subtile2">
            Sessin 1 Sessin 1 Sessin 1 Sessin 1Sessin 1
          </div>
        </div>
        <div>
          <q-btn
            :icon="roundDownloadForOffline"
            flat
            dense
            round
            color="secondary"
            :disable="isBought"
            size="24px"
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { roundPlayCircle, roundDownloadForOffline } from '@quasar/extras/material-icons-round'

defineProps({
  isBought: {
    type: Boolean,
    default: true
  }
})

</script>
