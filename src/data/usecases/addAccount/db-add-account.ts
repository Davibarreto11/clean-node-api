import { type AddAccountModel, type AddAccount, type AccountModel, type Encrypter, type AddAccountRepository } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly addAccountRepository: AddAccountRepository
  private readonly encrypter: Encrypter

  constructor (encrypter: Encrypter, addAccountRepository: AddAccountRepository) {
    this.encrypter = encrypter
    this.addAccountRepository = addAccountRepository
  }

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password)

    await this.addAccountRepository.add(Object.assign({}, accountData, { password: hashedPassword }))
    // await this.addAccountRepository.add({
    //   name,
    //   email,
    //   password: hashedPassword
    // })

    return await new Promise(resolve => { resolve(null) })
  }
}
