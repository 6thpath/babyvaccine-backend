import * as mongoose from 'mongoose'

export const databaseProvider = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> => {
      return await mongoose.connect(
        'mongodb://admin:Abc12345@ds127342.mlab.com:27342/nest',
        // 'mongodb://localhost:27017/nest',
        { useNewUrlParser: true },
        () => console.log('Database connected!')
      )
    }
  }
]
