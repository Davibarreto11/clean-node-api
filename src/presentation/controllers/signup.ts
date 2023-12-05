import { type HttpRequest, type HttpResponse } from '../protocols/http'
import { MissinParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { type Controller } from '../protocols/controller'

export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissinParamError(field))
      }
    }
  }
}