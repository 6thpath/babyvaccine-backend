export class SignUp {
  readonly username: string
  password: string
  readonly cpassword: string
  readonly fullname: string
}

export class SignIn {
  readonly username: string
  readonly password: string
}

export class UserInfo {
  readonly username: string
  readonly fullname: string
  readonly role: number
}