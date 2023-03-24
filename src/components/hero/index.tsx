import { FC } from 'react'
import { getPostById, getPosts } from '../../../services/api'
import classes from './styles.module.scss'

interface Props {
  bgColor: 'normal' | 'dark'
  isHeaderListOpen: boolean
}
const Hero: FC<Props> = ({ bgColor, isHeaderListOpen }) => {
  // const data = getPosts()
  // const data1 = getPostById('12tr2h3ft21')
  // console.log(data1)
  return (
    <div className={classes.container}>
      <h1 className={bgColor !== 'dark' ? classes.title1 : classes.titleDark}>
        Mendee<span>.</span>Digital
      </h1>
      <h2 className={bgColor !== 'dark' ? classes.title2 : classes.titleDark}>
        Limitless opportunities for talented people.
      </h2>
    </div>
  )
}

export default Hero
