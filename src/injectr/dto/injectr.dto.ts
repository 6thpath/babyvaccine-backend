export class Create {
  readonly childrenId: string
  readonly vaccinId: string
  readonly injectAt: string
}

export class Update {
  readonly id: string
  readonly vaccinId: string
  readonly injectAt: string
}

export class Delete {
  readonly id: string
}
