import en from '../../public/languages/en'
import codeImg from '../../public/images/code-your-future.webp'
import cardImg from '../../public/images/card.webp'
import ballImg from '../../public/images/homeless.webp'
import { v4 as uuid } from 'uuid'

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
    decrs: en.Welovegooddesignandcode,
  },
  {
    text: en.NFTAndBlockchainDevelopment,
    id: uuid(),
    decrs: en.NFTandBlockchainDevelopment,
  },
  {
    text: en.brandingAndVisualIdentity,
    id: uuid(),
    decrs: en.LogoscoloursTOVbrandguidelines,
  },
  {
    text: en.websiteAudit,
    id: uuid(),
    decrs: en.Wewilllocateyourproblemsandfindsolutions,
  },
  { text: en.graphicDesign, id: uuid(), decrs: en.Fromprinttoallthingsdigital },
  {
    text: en.motionGraphics,
    id: uuid(),
    decrs: en.Ifastaticisworthathousandwords,
  },
  {
    text: en.solanaWithRUSTProgrammingLanguage,
    id: uuid(),
    decrs: en.solanaWithRUSTProgrammingLanguage,
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
