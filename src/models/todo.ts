type Props = {
  text: string
}

export class Todo {
  id: string
  text: string
  constructor({ text }: Props) {
    this.id = Math.random().toString()
    this.text = text
  }
}
