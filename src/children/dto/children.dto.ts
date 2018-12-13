export class Create {
  readonly name: string
  readonly dob: string
  readonly userId: string
}

export class Update {
  readonly id: string
  readonly name: string
}

export class Delete {
  readonly id: string
}
