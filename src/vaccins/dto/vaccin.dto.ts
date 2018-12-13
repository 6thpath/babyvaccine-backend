export class Create {
  readonly name: string
  readonly description: string
  readonly availableAge: [number]|number
}

export class Update {
  readonly id: string
  readonly name: string
  readonly description: string
  readonly availableAge: [number]|number
}

export class Delete {
  readonly id: string
}
