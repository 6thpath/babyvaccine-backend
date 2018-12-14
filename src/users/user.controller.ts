import { Get, Query, Controller } from '@nestjs/common'
import { UserService } from './user.service'

import { SignUp, SignIn } from './dto/user.dto'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('signup')
  signup(@Query() signUp: SignUp): any {
    return this.userService.register(signUp)
  }

  @Get('signin')
  signin(@Query() signIn: SignIn): any {
    return this.userService.login(signIn)
  }

  @Get('list')
  list(): any {
    return this.userService.users()
  }
}
