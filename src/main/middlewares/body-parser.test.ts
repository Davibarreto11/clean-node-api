import request from 'supertest'
import app from '../config/app'

describe('Middleware Body Parser', () => {
  it('Should parse body as json', async () => {
    app.post('/test_body_parser', (request, response) => {
      response.send(request.body)
    })

    await request(app)
      .post('/test_body_parser')
      .send({ name: 'Davi Artur' })
      .expect({ name: 'Davi Artur' })
  })
})
