import en from '../../public/languages/en'
import codeImg from '../../public/images/code-your-future.webp'
import cardImg from '../../public/images/card.webp'
import ballImg from '../../public/images/homeless.webp'
import { v4 as uuid } from 'uuid'

export const menuList = [
  { text: en.aboutUs, id: uuid() },
  { text: en.services, id: uuid() },
  { text: en.contactUs, id: uuid() },
  { text: en.blog, id: uuid() },
]

export const cardList = [
  {
    title: en.codeYourFuture,
    description: en.codeYourFutureInfo,
    alt: 'Coding',
    imgSrc: codeImg,
    id: uuid(),
  },
  {
    title: en.contactlessHomelessDonation,
    description: en.contactlessHomelessDonationFirstInfo,
    alt: 'Card',
    imgSrc: cardImg,
    id: uuid(),
  },
  {
    title: en.contactlessHomelessDonation,
    description: en.contactlessHomelessDonationSecondInfo,
    alt: 'Ball',
    imgSrc: ballImg,
    id: uuid(),
  },
]
