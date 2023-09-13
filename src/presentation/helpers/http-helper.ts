import { ServerError } from '../errors/server.error'
import { type HttpResponse } from '../protocols/http'

// Sintax sugar, o "()" envolve o que é para ser retornado
export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})
