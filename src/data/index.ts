import en from '../../public/languages/en'
import { v4 as uuid } from 'uuid'

export const menuList = [
  { text: en.aboutUs, id: uuid() },
  { text: en.services, id: uuid() },
  { text: en.contactUs, id: uuid() },
  { text: en.blog, id: uuid() },
]

export const serviceList = [
  { text: en.websiteDesignAndCode, id: uuid() },
  { text: en.websiteAudit, id: uuid() },
  { text: en.brandingAndVisualIdentity, id: uuid() },
  { text: en.NFTAndBlockchainDevelopment, id: uuid() },
  { text: en.solanaWithRUSTProgrammingLanguage, id: uuid() },
  { text: en.graphicDesign, id: uuid() },
  { text: en.motionGraphics, id: uuid() },
]
