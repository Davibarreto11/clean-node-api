import { MongoHelper } from '../helpers/mongo-helper'

interface SutTypes {
  sut: AccountMongoRepository
}

const makeSut = (): SutTypes => {
  const sut = new AccountMongoRepository()

  return {
    sut
  }
}

describe('Account Mongo Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(global.__MONGO_URI__)
  })
})

afterAll(async () => {
  await MongoHelper.disconnect()
})

test('Should return an account on success', async () => {
  const { sut } = makeSut()
  const account = await sut.add({
    name: 'valid_name',
    email: 'valid_email@mail.com',
    password: 'valid_password'
  })
  expect(account).toBeTruthy()
  expect(account.id).toBeTruthy()
  expect(account.name).toBe('valid_name')
  expect(account.email).toBe('valid_email@mail.com')
  expect(account.password).toBe('valid_password')
})
