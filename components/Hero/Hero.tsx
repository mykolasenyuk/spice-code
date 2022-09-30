import { FC } from 'react'
import s from './Hero.module.scss'

interface Props {
  bgColor: 'normal' | 'dark'
}
const Hero: FC<Props> = ({ bgColor }) => {
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
