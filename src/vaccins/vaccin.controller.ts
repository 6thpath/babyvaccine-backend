// import { Get, Query, Controller } from '@nestjs/common'
// import { UserService } from './vaccin.service'

// import { SignUp, SignIn } from './dto/user.dto'

// @Controller('users')
// export class UserController {
//   constructor(private readonly userService: UserService) {}

//   @Get('signup')
//   signup(@Query() signUp: SignUp): any {
//     try {
//       return this.userService.register(signUp)
//     } catch {
//       return { code: 404, message: 'An error occurred'}
//     }
//   }

//   @Get('signin')
//   signin(@Query() signIn: SignIn): any {
//     try {
//       return this.userService.login(signIn)
//     } catch {
//       return { code: 404, message: 'An error occurred'}
//     }
//   }

//   @Get('list')
//   list(): any {
//     try {
//       return this.userService.users()
//     } catch {
//       return { code: 404, message: 'An error occurred'}
//     }
//   }
// }
