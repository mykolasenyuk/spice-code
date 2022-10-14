import { v4 as uuid } from 'uuid'
import cardImg from '../../public/images/card.webp'
import codeImg from '../../public/images/code-your-future.webp'
import ballImg from '../../public/images/homeless.webp'
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
    text: en.brandingAndVisualIdentity,
    id: uuid(),
    description: en.logosColoursTOVBrandGuidelines,
  },
  {
    text: en.websiteAudit,
    id: uuid(),
    description: en.weWillLocateYourProblemsAndFindSolutions,
  },
  { text: en.graphicDesign, id: uuid(), decrs: en.fromPrintToAllThingsDigital },
  {
    text: en.motionGraphics,
    id: uuid(),
    description: en.ifAStaticIsWorthAThousandWords,
  },
  {
    text: en.solanaWithRUSTProgrammingLanguage,
    id: uuid(),
    description: en.solanaWithRUSTProgrammingLanguage,
  },
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

export const pages = [
  '',
  'about-us',
  'blog',
  'contact-us',
  'services',
  'single-blog',
]

export const pagesWithFooter = pages.filter(
  page => page !== 'about-us' && page !== 'contact-us' && page !== 'services'
)

export const aboutUsDescriptions = [
  { id: uuid(), description: en.aboutUsFirst },
  { id: uuid(), description: en.aboutUsSecond },
  { id: uuid(), description: en.aboutUsThird },
  { id: uuid(), description: en.aboutUsFourth },
]
