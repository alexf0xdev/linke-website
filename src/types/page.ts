import { IButton, ICreateButton } from './button'

export interface IPage {
  id: string
  name: string
  link: string
  description: string
  imageUrl?: string
  userId: string
  buttons: IButton[]
}

export interface ICreatePage {
  name: string
  link: string
  description: string
  imageUrl?: string
  buttons: ICreateButton[]
}

export interface IUpdatePage {
  name?: string
  link?: string
  description?: string
  imageUrl?: string
  buttons?: ICreateButton[]
}
