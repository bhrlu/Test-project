import { boot } from 'quasar/wrappers'
import { useAppStore } from 'stores/app-store'

export default boot(({ router, redirect }) => {
  const store = useAppStore()

  router.beforeEach(async (to, from) => {
    if (to.meta.requiresAuth && !store.isLoggedIn) {
      redirect({ name: 'Login' })
    }
  })
})
