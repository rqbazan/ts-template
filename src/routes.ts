import { FastifyInstance } from 'fastify'
import statusRoutes from '~/modules/status/routes'
import basicRoutes from '~/modules/basic/routes'

export default (server: FastifyInstance) => {
  statusRoutes(server)
  basicRoutes(server)
}
