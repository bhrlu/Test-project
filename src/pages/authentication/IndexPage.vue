<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container class="window-height flex items-center justify-center bg-grey-4">
      <q-card
        class="border-radius-8"
        style="width: 400px"
      >
        <q-card-section>
          <q-form
            class="q-col-gutter-md"
            @submit.prevent="login"
          >
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
                :rules="[requiredRule]"
                lazy-rules
                outlined
                hide-bottom-space
              />
            </div>
            <div>
              <label> Password: </label>
              <q-input
                v-model="form.password"
                dense
                outlined
                :rules="[requiredRule]"
                lazy-rules
                hide-bottom-space
              />
            </div>
            <div>
              <q-btn
                color="primary"
                class="full-width"
                label="Log In"
                padding="12px 0"
                type="submit"
                unelevated
                :loading="loading"
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

import { api } from 'boot/axios'
import { useAppStore } from 'src/stores/app-store'
import { requiredRule } from 'src/utils'
import { API_URL_ADMIN } from 'src/api-url'
import { useRouter } from 'vue-router'

const form = ref({
  username: null,
  password: null,
  remember_me: 1
})
const loading = ref(false)
const store = useAppStore()
const router = useRouter()

const login = async () => {
  try {
    loading.value = true
    // const body = new FormData()
    // body.append('username', form.value.username)
    // body.append('password', form.value.password)
    // body.append('remember_me', form.value.remember_me)

    const { data } = await api.post(API_URL_ADMIN.login, form.value)
    store.setToken(data.data.access)
    // console.log(data.data)
    router.push({ name: 'Products' })
  }
  finally {
    loading.value = false
  }
}

</script>
