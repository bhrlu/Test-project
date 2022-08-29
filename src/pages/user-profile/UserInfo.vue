<template>
  <q-card class="shadow-1">
    <q-card-section>
      <div class="q-col-gutter-md">
        <div class="text-secondary text-h5">
          User Informations
        </div>
        <q-form @submit.prevent="">
          <div class="text-secondary q-col-gutter-y-md">
            <div>
              <label>Username:</label>
              <q-input outlined />
            </div>
            <div>
              <label>First Name:</label>
              <q-input outlined />
            </div>
            <div>
              <label>Last Name:</label>
              <q-input outlined />
            </div>
            <div>
              <label>Email:</label>
              <q-input outlined />
            </div>
            <div class="flex justify-end">
              <q-btn
                color="primary"
                label="Save"
                type="submit"
                no-caps
                padding="12px 40px"
                unelevated
              />
            </div>
          </div>
        </q-form>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>

</script>
