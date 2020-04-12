import { RequestHandler } from 'fastify'

export class StatusController {
  getStatus: RequestHandler = (req, res) => {
    res.send({ ok: true })
  }
}
