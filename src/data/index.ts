import { v4 as uuid } from 'uuid'
import cardImg from '../../public/images/Contactless-donation-image.png'
import alexPhoto from '../../public/images/Alex-story-image-1.png'
import alexDescrImg from '../../public/images/Alex-story-image-2.png'
import en from '../../public/languages/en'

export const menuList = [
  { text: en.aboutUs, id: uuid(), href: '/about-us' },
  { text: en.services, id: uuid(), href: '/services' },
  { text: en.contactUs, id: uuid(), href: '/contact-us' },
  { text: en.blog, id: uuid(), href: '/blog' },
]

export const serviceList = [
  {
    text: en.websiteDesignAndCode,
    id: uuid(),
    description: en.weLoveGoodDesignAndCode,
  },
  {
    text: en.NFTAndBlockchainDevelopment,
    id: uuid(),
    description: en.NFTandBlockchainDevelopment,
  },
  {
    text: en.websiteProductPhotography,
    id: uuid(),
    description: en.websiteProductDescription,
  },
  {
    text: en.websiteAudit,
    id: uuid(),
    description: en.weWillLocateYourProblemsAndFindSolutions,
  },
  {
    text: en.graphicDesign,
    id: uuid(),
    description: en.fromPrintToAllThingsDigital,
  },
  {
    text: en.consultancy,
    id: uuid(),
    description: en.consulnatcyDescription,
  },
]

export const cardList = [
  {
    title: en.alexStory,
    description: en.alexStoryDescr,
    description1: en.alexStorydescr1,
    alt: 'Alex story photo',
    imgSrc: alexPhoto,
    descrImg: alexDescrImg,
    id: uuid(),
  },
  {
    title: en.contactlessHomelessDonation,
    description: en.contactlessHomelessDonationFirstInfo,
    alt: 'Card',
    imgSrc: cardImg,
    id: uuid(),
  },
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
  { id: uuid(), description: en.aboutUsFourth },
]
