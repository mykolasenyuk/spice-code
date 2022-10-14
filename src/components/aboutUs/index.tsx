import Image from 'next/image'
import globe from '../../../public/images/globe.png'
import { aboutUsDescriptions } from '../../data'
import classes from './styles.module.scss'

const About = () => {
  return (
    <div className={classes.container}>
      <div className={classes.leftSide}>
        <h1 className={classes.title}>About Us</h1>
        <div className={classes.aboutUsInfo}>
          {aboutUsDescriptions.map(info => (
            <p key={info.id} className={classes.description}>
              {info.description}
            </p>
          ))}
        </div>
        <div className={classes.rightSide}>
          <div className={classes.imageContainer}>
            <Image
              className={classes.image}
              width={500}
              height={500}
              src={globe}
              alt='about us picture'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export { About }
