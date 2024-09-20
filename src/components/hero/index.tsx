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
    <>
      <div className={classes.container}>
        <h1 className={bgColor !== 'dark' ? classes.title1 : classes.titleDark}>
          SpiceCode<span>.</span>Solution
        </h1>
        <h2 className={bgColor !== 'dark' ? classes.title2 : classes.titleDark}>
          Digital studio
        </h2>
        <h2 className={bgColor !== 'dark' ? classes.title2 : classes.titleDark}>
          Turning your ideas into reality
        </h2>
      </div>
    </>
  )
}

export default Hero
