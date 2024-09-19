import { v4 as uuid } from 'uuid'
import cardImg from '../../public/images/Contactless-donation-image.png'
import alexPhoto from '../../public/images/Alex-story-image-1.png'
import alexDescrImg from '../../public/images/Alex-story-image-2.png'
import siBot from '../../public/images/SiBot.webp'
import en from '../../public/languages/en'

export const menuList = [
  { text: en.aboutUs, id: uuid(), href: '/about-us' },
  { text: en.services, id: uuid(), href: '/services' },
  { text: en.contactUs, id: uuid(), href: '/contact-us' },
  { text: en.blog, id: uuid(), href: '/blog' },
]

export const serviceList = [
  {
    text: en.ChatbotsAIBasedSolutions,
    id: uuid(),
    description: en.ChatbotsAIBasedSolution,
  },
  {
    text: en.BespokeWebMobileAppDevelopment,
    id: uuid(),
    description: en.BespokeWebMobileAppDevelopmentDes,
  },
  {
    text: en.UIUXDesignServices,
    id: uuid(),
    description: en.UIUXDesign,
  },
  {
    text: en.CommercialSustainableStartUpSupport,
    id: uuid(),
    description: en.CommercialSustainableStartUpSupportDes,
  },
  {
    text: en.systemAdministrationInfrastructureSupport,
    id: uuid(),
    description: en.systemAdministrationInfrastructureSupportDes,
  },
]

export const cardList = [
  {
    title: en.alexStory,
    description: en.alexStoryDescr,
    descr1: en.alexStoryDescr1,
    descr2: en.alexStoryDescr2,
    descr3: en.alexStoryDescr3,
    alt: 'Alex story photo',
    imgSrc: alexPhoto,
    descrImg: alexDescrImg,
    id: uuid(),
  },
  {
    id: uuid(),
    title: en.siBot,
    description: en.siBotDescr1,
    description2: en.siBotDescr2,
    description3: en.siBotDescr3,
    description4: en.siBotDescr4,
    description5: en.siBotDescr5,
    description6: en.siBotDescr6,
    description7: en.siBotDescr7,
    alt: 'siBot',
    imgSrc: siBot,
  },
  // {
  //   title: en.contactlessHomelessDonation,
  //   description: en.contactlessHomelessDonationFirstInfo,
  //   alt: 'Card',
  //   imgSrc: cardImg,
  //   id: uuid(),
  // },
  // {
  //   title: en.RefugeeUKguide,
  //   description: en.contactlessHomelessDonationSecondInfo,
  //   alt: 'Ball',
  //   imgSrc: ballImg,
  //   id: uuid(),
  // },
]

export const pages = [
  '',
  'about-us',
  'blog',
  'contact-us',
  'services',
  'single-blog',
]

export const pagesWithFooter = pages.filter(
  page => page !== 'contact-us' && page !== 'services'
)

export const aboutUsDescriptions = [
  { id: uuid(), description: en.aboutUsFirst },
  { id: uuid(), description: en.aboutUsSecond },
  { id: uuid(), description: en.aboutUsThird },
  { id: uuid(), description: en.aboutUsFifth },
  { id: uuid(), description: en.aboutUsSixth },
  { id: uuid(), description: en.aboutUsSeventh },
]
export const aboutUsDescriptionWithSub = {
  id: uuid(),
  item: en.aboutUsFourth,
}
