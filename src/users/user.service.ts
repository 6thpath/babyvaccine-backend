import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { User } from './interfaces/user.interface'
import { SignUp } from './dto/signUp.dto'

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async register(signUp: SignUp): Promise<User>{
    const registerAccount = new this.userModel(signUp)
    return await registerAccount.save()
  }

  root(): string {
    return 'Hello World!'
  }
}
