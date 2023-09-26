import { type AddAccountModel } from '../../domain/usecases/add-account'
import { type AccountModel } from '../../domain/models/Account'

export interface AddAccountRepository {
  add: (accountData: AddAccountModel) => Promise<AccountModel>

}
