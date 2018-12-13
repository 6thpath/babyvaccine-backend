import { Connection } from 'mongoose'
import { InjectrSchema } from './schemas/injectr.schema'

export const injectrProvider = [
  {
    provide: 'InjectrModelToken',
    useFactory: (connection: Connection) => connection.model('Injectr', InjectrSchema),
    inject: ['DbConnectionToken']
  }
]
