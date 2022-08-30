<template>
  <q-page padding>
    <div>
      <div class="row justify-between">
        <div class="text-h4 text-secondary">
          Products
        </div>
        <div>
          <q-btn
            label="Add product"
            no-caps
            color="primary"
            padding="12px 24px"
            unelevated
            @click="loadDialog"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useQuasar } from 'quasar'

const $q = useQuasar()

const loadDialog = async () => {
  const Dialog = await import('pages/products/CreateProduct.vue')

  $q.dialog({
    component: Dialog.default
  })
}

</script>
