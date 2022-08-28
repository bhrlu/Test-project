<template>
  <q-form @submit.prevent="">
    <div class="q-col-gutter-y-md">
      <div>
        <label>Email:</label>
        <q-input outlined />
      </div>
      <div>
        <label>Password:</label>
        <q-input outlined />
      </div>
      <div>
        <label>Confirm Password:</label>
        <q-input outlined />
      </div>
      <div>
        <q-btn
          type="submit"
          label="Sign Up"
          color="primary"
          padding="12px 0"
          class="full-width"
          unelevated
        />
      </div>
    </div>
  </q-form>
</template>

<script setup>

</script>
