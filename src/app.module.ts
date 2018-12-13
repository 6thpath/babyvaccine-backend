import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { AppController } from './controllers/app.controller'
import { AppService } from './services/app.service'

import { UserSchema } from './users/user.schema'
import { UserController } from './users/user.controller'
import { UserService } from './users/user.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService],
})

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest')],
})

export class AppModule {}
