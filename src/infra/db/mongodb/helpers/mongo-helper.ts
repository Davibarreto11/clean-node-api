import { MongoClient } from 'mongodb'

export const MongoHelper = {
  connection: null as MongoClient,

  async connect (url: string): Promise<void> {
    this.connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect () {
    await this.connection.close()
  }
}
