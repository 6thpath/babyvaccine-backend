import { Connection } from 'mongoose'
import { IaSchema } from './schemas/ia.schema'

export const iaProvider = [
  {
    provide: 'IaModelToken',
    useFactory: (connection: Connection) => connection.model('Ia', IaSchema),
    inject: ['DbConnectionToken']
  }
]
