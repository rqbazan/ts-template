import supertest from 'supertest'
import { getApp } from '~/app'

describe('basic module', () => {
  let app: ReturnType<typeof getApp>

  beforeAll(async () => {
    app = getApp()
    await app.ready()
  })

  afterAll(() => app.close())

  it('should return hello world', async () => {
    const res = await supertest(app.server).get('/hello-world')

    expect(res.body).toEqual({ text: 'Hello World' })
  })
})
