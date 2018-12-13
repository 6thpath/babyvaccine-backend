import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { SignUp, SignIn, UserInfo } from './dto/user.dto';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    register(signUp: SignUp): Promise<User | any>;
    login(signIn: SignIn): Promise<UserInfo | any>;
    users(): Promise<[User]>;
}
