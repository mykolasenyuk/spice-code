import { FC } from 'react'
import s from './styles.module.scss'

interface Props {
  bgColor: 'normal' | 'dark'
  isHeaderListOpen: boolean
}
const Hero: FC<Props> = ({ bgColor, isHeaderListOpen }) => {
  return (
    <div className={s.container}>
      <h1 className={bgColor !== 'dark' ? s.title1 : s.titleDark}>
        Mendee<span>.</span>Digital
      </h1>
      <h2 className={bgColor !== 'dark' ? s.title2 : s.titleDark}>
        A web development studio with a social impact.
      </h2>
    </div>
  )
}

export default Hero
