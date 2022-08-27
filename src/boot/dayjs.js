import utc from 'dayjs/plugin/utc'
import dayjs from 'dayjs'
import { boot } from 'quasar/wrappers'
import timezone from 'dayjs/plugin/timezone'
import isBetween from 'dayjs/plugin/isBetween'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(isBetween)
dayjs.tz.setDefault('Asia/Tehran')

export default boot(({ app }) => {
  app.config.globalProperties.$dayjs = dayjs
})

export { dayjs }
