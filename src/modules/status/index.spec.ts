import supertest from 'supertest'
import { getApp } from '~/app'

describe('basic module', () => {
  let app: ReturnType<typeof getApp>

  beforeAll(async () => {
    app = getApp()
    await app.ready()
  })

  afterAll(() => app.close())

  it('should return ok', async () => {
    const res = await supertest(app.server).get('/')

    expect(res.body).toEqual({ ok: true })
  })
})
