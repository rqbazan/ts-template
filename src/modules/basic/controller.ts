import { RequestHandler } from 'fastify'
import { BasicRespository } from './repository'

export class BasicController {
  repository: BasicRespository

  constructor(repository = new BasicRespository()) {
    this.repository = repository
  }

  getHelloWorld: RequestHandler = (req, res) => {
    try {
      const text = this.repository.getHelloWorld()
      res.send({ text })
    } catch (error) {
      res.send({ error: error.message })
    }
  }
}
