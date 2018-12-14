import { Injectable, Inject } from '@nestjs/common'
import { Model } from 'mongoose'
// import * as SHA256 from 'crypto-js/sha256'

import { User } from './interfaces/user.interface'
import { SignUp, SignIn, UserInfo } from './dto/user.dto'

@Injectable()
export class UserService {
  constructor(@Inject('UserModelToken') private readonly userModel: Model<User>) {}

  async register(signUp: SignUp): Promise<User|any>{
    try {
      const response = await this.userModel.countDocuments({ username: signUp.username })
      if (response) {
        return { code: 400, message: 'Username already existed!'}
      }
      // signUp.password = SHA256(signUp.password).toString()
      if (signUp.password !== signUp.cpassword) {
        return { code: 400, message: 'Password and confirm password does not match' }
      }
      const newAccount = new this.userModel(signUp)
      await newAccount.save()
      return { code: 200, message: 'Registered successfully' }
    } catch {
      return { code: 404, message: 'An error occurred!' }
    }
  }

  async login(signIn: SignIn): Promise<UserInfo|any>{
    try {
      const user = await this.userModel.findOne(signIn)
      if (!user) {
        return { code: 400, message: 'Wrong username or password' }
      }
      user.password = '*'
      return user
    } catch {
      return { code: 404, message: 'An error occurred!' }
    }
  }

  async users(): Promise<[User]|any>{
    try {
      return await this.userModel.find()
    } catch {
      return { code: 404, message: 'An error occurred!' }
    }
  }
}
