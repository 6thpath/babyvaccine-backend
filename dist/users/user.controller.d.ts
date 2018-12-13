import { UserService } from './user.service';
import { SignUp, SignIn } from './dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    signup(signUp: SignUp): any;
    signin(signIn: SignIn): any;
    list(): any;
}
