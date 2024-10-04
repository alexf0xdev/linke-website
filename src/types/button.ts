export type ButtonColor = 'WHITE' | 'BLACK' | 'RED' | 'GREEN'

export interface IButton {
  id: string
  text: string
  href: string
  color: ButtonColor
}

export interface ICreateButton {
  text: string
  href: string
  color: ButtonColor
}
