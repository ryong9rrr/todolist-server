type Props = {
  id?: string
  text: string
}

export class Todo {
  id: string
  text: string
  constructor({ id, text }: Props) {
    this.id = id || Date.now().toString()
    this.text = text
  }
}
