import { Get, Post, Body, Controller } from '@nestjs/common'
import { UserService } from './user.service'

import { SignUp } from './dto/user.dto'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  create(@Body() signUp: SignUp): any {
    console.log(signUp)
    try {
      return this.userService.register(signUp)
    } catch {
      return false
    }
  }

  // @Post('login')
  // login()

  @Get('ab*cd')
  findAll() {
    return 'This route uses a wildcard'
  }
}
