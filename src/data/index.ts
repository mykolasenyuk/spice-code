import en from '../../public/languages/en'
import { v4 as uuid } from 'uuid'

export const menuList = [
  { text: en.aboutUs, id: uuid() },
  { text: en.services, id: uuid() },
  { text: en.contactUs, id: uuid() },
  { text: en.blog, id: uuid() },
]
