import { defineStore } from 'pinia'
import { LocalStorage } from 'quasar'

import { api } from 'boot/axios'
import { API_URL_ADMIN } from 'src/api-url'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    token: LocalStorage.getItem('token') || null,
    user: {}
  }),
  getters: {
    isLoggedin (state) {
      return !!state.token
    }
  },
  actions: {
    setToken (token) {
      this.token = token
      LocalStorage.set('token', token)
    },
    async fetchUserData () {
      const { data } = await api.get(API_URL_ADMIN.login)
      this.user = data
    },
    logOut () {
      LocalStorage.remove('token')
      this.user = {}
    }
  }
})
