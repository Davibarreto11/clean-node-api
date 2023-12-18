import { type AccountModel, type AddAccountModel } from '../usecases/addAccount/db-add-account-protocols'

export interface AddAccountRepository {
  add: (accountData: AddAccountModel) => Promise<AccountModel>
}
