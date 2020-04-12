import fastify from 'fastify'
import helmet from 'fastify-helmet'
import xss from 'x-xss-protection'
import cors from 'cors'
import appRoutes from './routes'

export function getApp() {
  const app = fastify()

  app.register(helmet)
  app.use(cors())
  app.use(xss())

  appRoutes(app)

  return app
}
