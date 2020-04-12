import { getApp } from './app'
import { config } from './config'

const app = getApp()

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})
