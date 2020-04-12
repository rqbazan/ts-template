import { FastifyInstance } from 'fastify'
import { BasicController } from './controller'

export default (server: FastifyInstance) => {
  const controller = new BasicController()

  server.get('/hello-world', controller.getHelloWorld)
}
