import { Injectable, Inject } from '@nestjs/common'
import { Model } from 'mongoose'
import * as SHA256 from 'crypto-js/sha256'

import { User } from './interfaces/user.interface'
import { SignUp, SignIn, UserInfo } from './dto/user.dto'

@Injectable()
export class UserService {
  constructor(@Inject('UserModelToken') private readonly userModel: Model<User>) {}

  async register(signUp: SignUp): Promise<User|string>{
    signUp.password = SHA256(signUp.password).toString()
    const newAccount = new this.userModel(signUp)
    return await newAccount.save()
  }

  async login(signIn: SignIn): Promise<UserInfo|string>{
    const user = await this.userModel.find(signIn)
    if (!user) {
      return 'Wrong username or password'
    }
    return user
  }

  root(): string {
    return 'Hello World!'
  }
}
