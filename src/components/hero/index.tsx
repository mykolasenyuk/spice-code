import { FC } from 'react'
import classes from './styles.module.scss'

interface Props {
  bgColor: 'normal' | 'dark'
  isHeaderListOpen: boolean
}
const Hero: FC<Props> = ({ bgColor, isHeaderListOpen }) => {
  return (
    <div className={classes.container}>
      <h1 className={bgColor !== 'dark' ? classes.title1 : classes.titleDark}>
        Mendee<span>.</span>Digital
      </h1>
      <h2 className={bgColor !== 'dark' ? classes.title2 : classes.titleDark}>
        A digital product studio with a social impact.
      </h2>
    </div>
  )
}

export default Hero
