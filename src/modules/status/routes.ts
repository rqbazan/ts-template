import { FastifyInstance } from 'fastify'
import { StatusController } from './controller'

export default (server: FastifyInstance) => {
  const controller = new StatusController()

  server.get('/', controller.getStatus)
}
