import axios from 'axios'
import { boot } from 'quasar/wrappers'
// import { useAppStore } from 'stores/app-store'
import { Notify, LocalStorage } from 'quasar'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: 'http://localhost:8000/back-end' })

function GET_TOKEN (key) {
  return LocalStorage.getItem(key) || null
}

// function retryRequest (config) {
//   config.headers.Authorization = `bearer ${GET_TOKEN('token')}`
//   return axios(config)
// }

api.interceptors.request.use(config => {
  const TOKEN = GET_TOKEN('token')

  // Do something before request is sent
  config.headers.common.Authorization = `bearer ${TOKEN}`

  return config
}, error => {
  // Do something with request error

  return Promise.reject(error)
})

export default boot(({ app, store, router }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  api.interceptors.response.use(response => {
    return response
  }, async error => {
    // const store = useAppStore()
    const errorResponse = error.response

    Notify.create({
      color: 'negative',
      message: errorResponse.data.detail
    })

    // if (errorResponse.status === 401) {
    //   if (errorResponse.data.detail === 'Refresh') {
    //     // await store.refreshToken()

    //     return retryRequest(errorResponse.config)
    //   }
    //   if (errorResponse.data.detail) router.push({ name: 'Login' })
    // }

    return Promise.reject(error)
  })

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
