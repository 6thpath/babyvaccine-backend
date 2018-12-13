import { Connection } from 'mongoose'
import { VaccinSchema } from './schemas/vaccin.schema'

export const vaccinProvider = [
  {
    provide: 'VaccinModelToken',
    useFactory: (connection: Connection) => connection.model('User', VaccinSchema),
    inject: ['DbConnectionToken']
  }
]
