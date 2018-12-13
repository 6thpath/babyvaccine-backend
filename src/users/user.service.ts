import { Injectable, Inject } from '@nestjs/common'
import { Model } from 'mongoose'
import * as SHA256 from 'crypto-js/sha256'

import { User } from './interfaces/user.interface'
import { SignUp, SignIn, UserInfo } from './dto/user.dto'

@Injectable()
export class UserService {
  constructor(@Inject('UserModelToken') private readonly userModel: Model<User>) {}

  async register(signUp: SignUp): Promise<User|string>{
    // signUp.password = SHA256(signUp.password).toString()
    const newAccount = new this.userModel(signUp)
    return await newAccount.save()
  }

  async login(signIn: SignIn): Promise<UserInfo|any>{
    const user = await this.userModel.findOne(signIn)
    if (!user) {
      return { code: 400, message: 'Wrong username or password'}
    }
    return user
  }

  async users(): Promise<[User]>{
    return await this.userModel.find()
  }
}
