import { Connection } from 'mongoose'
import { ChildrenSchema } from './schemas/children.schema'

export const childrenProvider = [
  {
    provide: 'ChildrenModelToken',
    useFactory: (connection: Connection) => connection.model('Children', ChildrenSchema),
    inject: ['DbConnectionToken']
  }
]
