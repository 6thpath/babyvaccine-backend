import { Get, Post, Body, Controller } from '@nestjs/common'
import { UserService } from './user.service'

import { SignUp } from './dto/signUp.dto'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() signUp: SignUp): boolean {
    console.log(signUp)
    try {
      this.userService.register(signUp)
      return true
    } catch {
      return false
    }
  }

  @Get('ab*cd')
  findAll() {
    return 'This route uses a wildcard'
  }
}
